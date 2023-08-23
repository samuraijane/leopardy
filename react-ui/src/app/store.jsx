import { configureStore } from "@reduxjs/toolkit";
import isLoggedInSlice from "../feature/isLoggedInSlice.jsx"

export default configureStore({
    reducer: {
        isLoggedIn: isLoggedInSlice
    }
})