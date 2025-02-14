import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './reducers/cartSlice'
import { isOpenReducer } from './reducers/isOpenSlice'
import { searchReducer } from './reducers/searchSlice'
import { shoppingCardReducer } from './reducers/shoppingCardSlice'
import { sidebarReducer } from './reducers/sidebarSlice'
import { authReducer } from './reducers/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    shoppingCard:shoppingCardReducer,
    sidebar:sidebarReducer,
    cart:cartReducer,
    search:searchReducer,
    isOpen:isOpenReducer
  },
  devTools:true,
})