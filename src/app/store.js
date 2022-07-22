import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";

//counterSlice is a slice, which contains reducers, but is not a reducer in itself
export default configureStore({
    reducer: {
        counter: counterSlice
    }
});
