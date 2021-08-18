const user = {
    id: Date.now(),
    username: 'user',
    password: 'password',
    email: 'user@email.com'
}

const login = (param) => new Promise((res, rej) => {
    if (param.username === user.username && param.password === user.password) {
        res({ user, token: '123465' })
    } else {
        rej(new Error('Invalid credentials'))
    }
})

const signup = (param) => new Promise((res, rej) => {
    if (param.username && param.password && param.email) {
        const newUser = {
            id: Date.now(),
            username: param.username,
            password: param.password,
            email: param.email
        }
        res({ newUser, token: '654321' })
    } else {
        rej(new Error('Fill required'))
    }
})

export {login, signup}