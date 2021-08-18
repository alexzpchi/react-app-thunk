export const getUsers = () => new Promise((res, rej) => {
    return fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        response.json().then((data) => {
            res(data)
        })
    }).catch((error) => {
        rej(new Error(error.message))
    })
})