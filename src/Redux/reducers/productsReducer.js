import { ActionsType } from '../ActionsType'
const initialState = {
    products: [],
    sampleFeatureProducts: [],
    samplePopularProducts: [],
}
export const products_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionsType.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload.products
            }
        case ActionsType.GET_SAMPLE_FEATURE_PRODUCTS:
            return {
                ...state,
                sampleFeatureProducts: action.payload.sampleFeatureProducts
            }
        case ActionsType.GET_SAMPLE_POPULAR_PRODUCTS:
            return {
                ...state,
                samplePopularProducts: action.payload.samplePopularProducts
            }
        default:
            return state;
    }
}