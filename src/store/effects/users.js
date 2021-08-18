import {createAsyncThunk} from '@reduxjs/toolkit'
import {getUsers} from '../../api/users'

const usersThunk = createAsyncThunk('users',
    async (thunkApi) => {
        try {
            const data = await getUsers()
            return data
        } catch (err) {
            return thunkApi.rejectWithValue(err.message)
        }

    }
)

export {usersThunk}