import { configureStore } from "@reduxjs/toolkit";
import isLoggedInSlice from "../feature/isLoggedInSlice"

export default configureStore({
    reducer: {
        isLoggedIn: isLoggedInSlice
    }
})