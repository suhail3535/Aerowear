import axios from "axios";
import {  GET_FAILURE, GET_REQUEST, GET_SUCCESS, POST_FAILURE, POST_REQUEST, POST_SUCCESS } from "./actiontype"



// postrequest
export const getpostRequest = () => {
    return{type:POST_REQUEST}
}
export const getpostSuccess = (payload) => {
  return { type: POST_SUCCESS,payload };
};
export const getpostFailure = () => {
  return { type: POST_FAILURE };
};


// getreques
export const getdataSuccess = (payload) => {
  return { type: GET_SUCCESS,payload };
};




export const postRequest = (payload) => (dispatch) => {
  dispatch(getpostRequest());
  axios
    .post("http://localhost:8080/women", payload)
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
    .get("http://localhost:8080/women")
    .then((res) => {
      console.log(res.data);
      dispatch(getdataSuccess(res.data));
    })
    .then((error) => {
      dispatch(getpostFailure());
    });
};
