import axios from "axios";
import { POST_FAILURE } from "../AdminReducer/actiontype";
import {
    DELETE_SUCCESS,
    GET_ADDRESS_SUCCESS,
    POST_ADDRESS_SUCCESS,
    POST_REQUEST,
} from "./actiontype";

export const getpostRequest = () => {
    return { type: POST_REQUEST };
};

export const getpostFailure = () => {
    return { type: POST_FAILURE };
};

export const getpostSuccessAddress = (payload) => {
    return { type: POST_ADDRESS_SUCCESS };
};
export const getdataSuccessAddress = (payload) => {
    return { type: GET_ADDRESS_SUCCESS, payload };
};

export const deldatasuccess = () => {
    return { type: DELETE_SUCCESS };
};
export const postRequestAddress = (payload) => (dispatch) => {
    dispatch(getpostRequest());
    axios
        .post("https://json-server-vercel-rosy-eight.vercel.app/address", payload)
        .then((res) => {
            console.log("post", res.data);
            dispatch(getpostSuccessAddress(res.data));
        })
        .then((error) => {
            dispatch(getpostFailure());
        });
};

export const getRequestAddress = () => (dispatch) => {
    dispatch(getpostRequest());
    axios
        .get("https://json-server-vercel-rosy-eight.vercel.app/address")
        .then((res) => {
            dispatch(getdataSuccessAddress(res.data));
        })
        .then((error) => {
            dispatch(getpostFailure());
        });
};

export const deletedataAdd = (id) => (dispatch) => {
    dispatch(getpostRequest());
    return axios
        .delete(`https://json-server-vercel-rosy-eight.vercel.app/address/${id}`)
        .then((res) => {
            console.log(res.data);
            dispatch(deldatasuccess());
        })
        .catch((err) => {
            dispatch(getpostFailure());
        });
};
