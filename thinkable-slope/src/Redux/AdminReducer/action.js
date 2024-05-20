import axios from "axios";
import {
    DELETE_SUCCESS,
    GET_SUCCESS,
    PATCH_SUCCESS,
    POST_ADDRESS_SUCCESS,
    POST_FAILURE,
    POST_REQUEST,
    POST_SUCCESS,
} from "./actiontype";

// postrequest
export const getpostRequest = () => {
    return { type: POST_REQUEST };
};

export const getpostFailure = () => {
    return { type: POST_FAILURE };
};
export const getpostSuccess = (payload) => {
    return { type: POST_SUCCESS, payload };
};

// getrequest
export const getdataSuccess = (payload) => {
    return { type: GET_SUCCESS, payload };
};

// deleterequest
export const deldatasuccess = () => {
    return { type: DELETE_SUCCESS };
};

export const postRequest = (payload) => (dispatch) => {
    dispatch(getpostRequest());
    axios
        .post("https://rct-211project.onrender.com/women", payload)
        .then((res) => {
            console.log(res.data);
            dispatch(getpostSuccess(res.data));
        })
        .then((error) => {
            dispatch(getpostFailure());
        });
};

export const getRequest = () => (dispatch) => {
    dispatch(getpostRequest());
    axios
        .get("https://rct-211project.onrender.com/women")
        .then((res) => {
            // console.log(res.data);
            dispatch(getdataSuccess(res.data));
        })
        .then((error) => {
            dispatch(getpostFailure());
        });
};

export const deletedata = (id) => (dispatch) => {
    dispatch(getpostRequest());
    return axios
        .delete(`https://rct-211project.onrender.com/women/${id}`)
        .then((res) => {
            // console.log(res.data);
            dispatch(deldatasuccess());
        })
        .catch((err) => {
            dispatch(getpostFailure());
        });
};

export const editProduct = (id, newData) => (dispatch) => {
    dispatch(getpostRequest());
    axios
        .patch(`https://rct-211project.onrender.com/women/${id}`, newData)
        .then((res) => {
            dispatch({ type: PATCH_SUCCESS });
        })
        .catch((err) => {
            dispatch(getpostFailure());
        });
};
