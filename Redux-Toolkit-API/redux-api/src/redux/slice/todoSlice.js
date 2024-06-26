import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchTodos", async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    return res?.json();
})

const todoSlice = createSlice({
    name : "todo",
    initialState: {
        isLoading: false,
        data: [],
        isError : false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state,action) => {
            state.data = action.payload;
            state.isLoading = false;
        })
        builder.addCase(fetchTodos.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTodos.rejected, (state,action) => {
            state.isError = true;
        })
    }
})

export default todoSlice.reducer;