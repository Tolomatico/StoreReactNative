import { configureStore, createReducer } from "@reduxjs/toolkit";
import productsReducers from "./products/products.slice"
import categoriesReducer from "./categories/categories.slice"
import cartReducer from "./cart/cart.slice"

export const store=configureStore({

    reducer: {

        products:productsReducers,
        categories:categoriesReducer,
        cart:cartReducer,
    },

})