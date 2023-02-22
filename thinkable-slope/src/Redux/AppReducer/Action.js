// import React from "react";
// import axios from "axios";
// import { POST_FAILURE, POST_REQUEST, POST_SUCCESS } from "./ActionType";

// export const postRequest = () => {
//   return { type: POST_REQUEST };
// };

// export const postSuccess = (payload) => {
//   return { type: POST_SUCCESS };
// };
// export const postFailure = () => {
//   return { type: POST_FAILURE };
// };


// export const postDataRequest = (payload)=>(dispatch) => {
//   dispatch(postRequest());
//   axios
//     .post("http://localhost:8080/women", payload)
//     .then((res) => {
//       console.log(res.data);
//       dispatch(postSuccess());
//     })
//     .then((err) => {
//       console.log(err);
//       dispatch(postFailure());
//     });
// }
