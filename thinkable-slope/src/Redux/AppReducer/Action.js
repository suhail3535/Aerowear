
import {
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
} from "./ActionType";
import axios from "axios";

export const getProductsRequestAction = () => {
    return { type: GET_PRODUCTS_REQUEST };
};

export const getProductsSuccessAction = (payload) => {
    return { type: GET_PRODUCTS_SUCCESS, payload };
};

export const getProductsFailureAction = () => {
    return { type: GET_PRODUCTS_FAILURE };
};

export const getWomenProducts = (obj) => (dispatch) => {
    dispatch(getProductsRequestAction());
    axios
        .get("https://json-server-vercel-rosy-eight.vercel.app/women", obj)
        .then((res) => {
            dispatch(getProductsSuccessAction(res.data));
        })
        .catch((err) => {
            dispatch(getProductsFailureAction());
        });
};


export const getMenProducts = (obj) => (dispatch) => {
    dispatch(getProductsRequestAction());
    axios
        .get("https://json-server-vercel-rosy-eight.vercel.app/men", obj)
        .then((res) => {
            console.log(res);

            dispatch(getProductsSuccessAction(res.data));
        })
        .catch((err) => {
            dispatch(getProductsFailureAction());
        });
};

export const getClearanceProducts = (obj) => (dispatch) => {
    dispatch(getProductsRequestAction());
    axios
        .get("https://json-server-vercel-rosy-eight.vercel.app/clearence", obj)
        .then((res) => {
            dispatch(getProductsSuccessAction(res.data));
        })
        .catch((err) => {
            dispatch(getProductsFailureAction());
        });
};
