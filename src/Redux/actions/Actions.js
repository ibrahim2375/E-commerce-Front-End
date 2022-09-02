import { ActionsType } from '../ActionsType'
export const get_user = (user, user_state) => ({
    type: ActionsType.GET_USER,
    payload: {
        user,
        user_state,
    }
})
export const user_orders = user_orders => ({
    type: ActionsType.USER_ORDERS,
    payload: {
        user_orders,
    }
})
export const get_products = (products) => ({
    type: ActionsType.GET_PRODUCTS,
    payload: {
        products,
    }
})
export const get_sample_feature_products = (sampleFeatureProducts) => ({
    type: ActionsType.GET_SAMPLE_FEATURE_PRODUCTS,
    payload: {
        sampleFeatureProducts,
    }
})
export const get_sample_popular_products = (samplePopularProducts) => ({
    type: ActionsType.GET_SAMPLE_POPULAR_PRODUCTS,
    payload: {
        samplePopularProducts,
    }
})

