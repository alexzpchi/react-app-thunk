import {
    createSlice
} from '@reduxjs/toolkit'
import {
    loginThunk, signupThunk
} from '../effects/auth'

const initialState = {
    token: '',
    user: {},
    loading: false,
    error: ''
}

export const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetError: (state) => {
            state.error = ''
        },
        logout: (state) => {
            state.token = '';
            state.user = {}
        }
    },
    extraReducers: (builder) => {
        builder
            //login
            .addCase(loginThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                const {token, user} = action.payload
                state.loading = false;
                state.token = token;
                state.user = user;
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // signin
            .addCase(signupThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(signupThunk.fulfilled, (state, action) => {
                const {token, newUser} = action.payload
                state.loading = false;
                state.token = token;
                state.user = newUser;
            })
            .addCase(signupThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
})

export const authSlice = {
    ...slice,
    effects: {
        loginThunk,
        signupThunk
    }
}