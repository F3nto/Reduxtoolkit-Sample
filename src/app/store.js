import {configureStore} from "@reduxjs/toolkit"
import todoSliceReducer from "../features/todo/todoSlide"

export const store = configureStore({
    reducer : todoSliceReducer,
    
})