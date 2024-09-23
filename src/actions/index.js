import {auth, provider } from "../firebase"
// import { auth } from "../firebase";

import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
})

export function signInAPI() {
  return(dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        // dispatch(setUser(payload.user))
        console.log(payload)
      })
      .catch((error) => alert(error.message));
  }
}