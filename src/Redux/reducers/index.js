import { user_reducer } from './userReducer'
// import { products_reducer } from './productsReducer'
import { combineReducers } from 'redux'

export const allReducers = combineReducers({
    user_data: user_reducer,
    // products_data: products_reducer

})
// export const userReducer = combineReducers({
//     user_data: user_reducer,
// })

