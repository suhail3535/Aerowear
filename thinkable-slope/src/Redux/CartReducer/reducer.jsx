import {
    DELETE_CART_SUCCESS,
    GET_CART_FAILURE,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    POST_CART_SUCESS,
} from "./ActionType";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CART_REQUEST: {
            return { ...state, isLoading: true };
        }

        case GET_CART_SUCCESS: {
            return { ...state, isLoading: false, products: payload };
        }

        case GET_CART_FAILURE: {
            return { ...state, isError: true, isLoading: false };
        }

        case POST_CART_SUCESS: {
            return {
                ...state,
                isLoading: false,
                products: [payload, ...state.products],
            };
        }
        case DELETE_CART_SUCCESS: {
            return { ...state, isLoading: false };
        }

        default:
            return state;
    }
};
