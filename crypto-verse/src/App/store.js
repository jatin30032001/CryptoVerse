 import { configureStore, ConfigureStore   } from "@reduxjs/toolkit";
 import { cryptoApi } from "../Services/cryptoApi";
 import { setupListeners } from '@reduxjs/toolkit/query'
  export default configureStore({
     reducer:{
        [cryptoApi.reducerPath] : cryptoApi.reducer,
     },

     middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(cryptoApi.middleware),
  })   ;
  