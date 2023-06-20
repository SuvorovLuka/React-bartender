import { configureStore } from "@reduxjs/toolkit";
import CardAlchoReducer from "./getCardAlcho";

export const store =  configureStore({
    reducer:{
        alcohole:CardAlchoReducer,
    }
})