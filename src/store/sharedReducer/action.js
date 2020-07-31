import { SET_OTP, SET_ACCESS_TOKEN, SHOW_LOADER, HIDE_LOADER } from "./constants";


export const setOtp = otp => ({ type: SET_OTP, payload: otp });
export const setAccessToken = token => ({ type: SET_ACCESS_TOKEN, payload: token });
export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });