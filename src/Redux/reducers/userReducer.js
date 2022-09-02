import { ActionsType } from '../ActionsType'
const initialState = {
    user: null,
    user_state: false,
    user_orders: []
}
export const user_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionsType.GET_USER:
            return {
                ...state,
                user_state: action.payload.user_state,
                user: action.payload.user,
            }
        case ActionsType.USER_ORDERS:
            return {
                ...state,
                user_orders: action.payload.user_orders,
            }
        default:
            return state;
    }
}