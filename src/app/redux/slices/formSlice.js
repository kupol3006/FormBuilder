import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { setCookie, destroyCookie } from 'nookies';

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_KEY;

// export const loginAsync = createAsyncThunk(
//     'auth/login',
//     async ({ code, pin }) => {

//         const auth = {
//             code,
//             pin
//         }
//         const response = await axios.post(API_BASE_URL + 'auth/login', auth);
//         const token = response.data.access_token;
//         setCookie(null, 'token', token, {
//             maxAge: 1 * 24 * 60 * 60,
//             path: '/',
//         });
//         setCookie(null, 'code', code, {
//             maxAge: 1 * 24 * 60 * 60,
//             path: '/',
//         });
//         return response.data
//     },
// )

// export const logout = createAsyncThunk(
//     'auth/logout',
//     () => {
//         destroyCookie(undefined, 'token');
//         destroyCookie(undefined, 'code');
//         console.log('logout');
//     }
// );

const initialState = {
    token: null,
    isLogin: false,
    data: [],
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
            
    },
})

export const { setData } = formSlice.actions;

export default formSlice.reducer;