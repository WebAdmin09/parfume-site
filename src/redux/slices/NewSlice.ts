import request from "@/api";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NewsResponseType } from "../types/news";



interface StateType {
    loading: boolean;
    news: NewsResponseType[];
  }
  
  const initialState: StateType = {
    loading: false,
    news: [],
  };

  export const getProductCard = createAsyncThunk("product/fetching", async () => {

    const { data } = await request.get("product");
    return data;
});

export const NewSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductCard.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getProductCard.fulfilled, (state, {payload}: PayloadAction<NewsResponseType[]>) => {
            state.loading = false,
            state.news = payload
        })
        builder.addCase(getProductCard.rejected, (state) => {
            state.loading = false
        })
    }
})