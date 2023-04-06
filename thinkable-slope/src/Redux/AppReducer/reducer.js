import {
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
} from "./ActionType";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCTS_REQUEST: {
            return { ...state, isLoading: true };
        }

        case GET_PRODUCTS_SUCCESS: {
            return { ...state, isLoading: false, products: payload };
        }

        case GET_PRODUCTS_FAILURE: {
            return { ...state, isError: true, isLoading: false };
        }

        default:
            return state;
    }
};
