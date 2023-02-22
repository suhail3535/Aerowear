import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./ActionType"
import axios from "axios"

export const getProductsRequestAction=()=>{
  return {type:GET_PRODUCTS_REQUEST }
}

export const getProductsSuccessAction=(payload)=>{
  return {type:GET_PRODUCTS_SUCCESS,payload}
}

export const getProductsFailureAction=()=>{
  return {type:GET_PRODUCTS_FAILURE}
}

export const getProducts = (dispatch) => {
  dispatch(getProductsRequestAction())
  axios.get("http://localhost:8080/women").then((res) => {
  
      dispatch(getProductsSuccessAction(res.data))
  }).catch((err) => {
      dispatch(getProductsFailureAction())
  })
}
