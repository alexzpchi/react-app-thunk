import {
    createSlice
} from '@reduxjs/toolkit'
import {
    usersThunk
} from '../effects/users'

const initialState = {
    users: [],
    loading: false,
    error: ''
}

export const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        resetError: (state) => {
            state.error = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(usersThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(usersThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(usersThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
})

export const usersSlice = {
    ...slice,
    effects: {
        usersThunk
    }
}