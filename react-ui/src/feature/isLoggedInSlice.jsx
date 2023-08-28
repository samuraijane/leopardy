import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const doLogin = async(username, email, password) => {
    const options = {
        body: JSON.stringify({username, email, password}),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    };

const response = await fetch ('/signup', options);
const data = await response.json();
return await data;
};

export const verifyAuth = createAsyncThunk('/signup', async ({username, email, password}) => {
    if(username && email  && password) {
        const response = await doLogin(username, email, password);
        const { isAuthenticated } = response
        console.log("verifyAuth", isAuthenticated)
        return isAuthenticated
    } else return false 
})

export const isLoggedInSlice = createSlice({
    name: "isLoggedIn",
    initialState: null,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(verifyAuth.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const selectIsLoggedIn = state => state.isLoggedIn

export default isLoggedInSlice.reducer;