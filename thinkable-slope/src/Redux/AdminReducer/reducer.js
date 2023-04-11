import {
    DELETE_SUCCESS,

    GET_SUCCESS,
    PATCH_SUCCESS,

    POST_FAILURE,
    POST_REQUEST,
    POST_SUCCESS,
} from "./actiontype";

const initialState = {
    isLoading: false,
    women: [],
    isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case POST_REQUEST:
            return { ...state, isLoading: true };
        case POST_FAILURE:
            return { ...state, isError: true, isLoading: false };

        case POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                women: [payload, ...state.women],
            };

        //  getreqest function

        case GET_SUCCESS:
            return { ...state, isLoading: false, women: payload };

        //  deleterequest
        case DELETE_SUCCESS:
            return { ...state, isLoading: false };
        case PATCH_SUCCESS:
            return { ...state, isLoading: false };
        default:
            return state;
    }
};
