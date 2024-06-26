import { configureStore } from '@reduxjs/toolkit';
import vaishu from './slice/todoSlice'

export const store = configureStore({
    reducer:{
        todo : vaishu
    }
})