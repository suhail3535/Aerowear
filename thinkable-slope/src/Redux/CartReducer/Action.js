import {
    DELETE_CART_SUCCESS,
    GET_CART_FAILURE,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    POST_CART_SUCESS,
} from "./ActionType";
import axios from "axios";

export const getCartProductsRequestAction = () => {
    return { type: GET_CART_REQUEST };
};

export const getCartProductsSuccessAction = (payload) => {
    return { type: GET_CART_SUCCESS, payload };
};

export const getCartProductsFailureAction = () => {
    return { type: GET_CART_FAILURE };
};

export const PostCartSuccess = (payload) => {
    return { type: POST_CART_SUCESS, payload };
};

export const DeleteCartSuccess = () => {
    return { type: DELETE_CART_SUCCESS };
};

export const getCartProducts = () => (dispatch) => {
    dispatch(getCartProductsRequestAction());
    return axios
        .get("https://rct-211project.onrender.com/cart")
        .then((res) => {
            dispatch(getCartProductsSuccessAction(res.data));
        })
        .catch((err) => {
            dispatch(getCartProductsFailureAction());
        });
};

export const postCartRequest = (payload) => (dispatch) => {
    dispatch(getCartProductsRequestAction());
    axios
        .post("https://rct-211project.onrender.com/cart", payload)
        .then((res) => {
            dispatch(PostCartSuccess(res.data));
        })
        .then((err) => {
            dispatch(getCartProductsFailureAction());
        });
};

export const deleteCartdata = (id) => (dispatch) => {
    dispatch(getCartProductsRequestAction());
    return axios
        .delete(`https://rct-211project.onrender.com/cart/${id}`)
        .then((res) => {
            dispatch(DeleteCartSuccess());
        })
        .catch((err) => {
            dispatch(getCartProductsFailureAction());
        });
};





