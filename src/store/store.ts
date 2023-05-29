import UserService from "@/core/service/UserService";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        user:UserService
    }
})