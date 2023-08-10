import { configureStore, } from "@reduxjs/toolkit"
import productsReducers from "./products/products.slice"
import categoriesReducer from "./categories/categories.slice"
import cartReducer from "./cart/cart.slice"
import { categoriesApi } from "./categories/API/categoriesApi"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { productsApi } from "./products/api"
import { ordersApi } from "./orders/api"
import { authApi } from "./auth/api"
import authReducer from "./auth/auth.slice"

export const store = configureStore({

    reducer: {

        products: productsReducers,
        categories: categoriesReducer,
        cart: cartReducer,
        auth:authReducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>

        getDefaultMiddleware().concat(
            categoriesApi.middleware,
            productsApi.middleware,
            ordersApi.middleware,
            authApi.middleware)
})

setupListeners(store.dispatch)