import { SET_OTP, SET_ACCESS_TOKEN, SHOW_LOADER, HIDE_LOADER } from "./constants";


const initialState = {
    otp: "",
    accessToken: "",
    firstName: "",
    lastName: "",
    email: "",
    isShowLoader: false,
}


export default function (state = initialState, action){
    switch (action.type) {
        case SET_OTP:
            return {
                ...state,
                otp: action.payload
            };
        case SET_ACCESS_TOKEN:
        return {
            ...state,
            accessToken: action.payload
        };
        case SHOW_LOADER:
        return {
            ...state,
            isShowLoader: true
        };
        case HIDE_LOADER:
        return {
            ...state,
            isShowLoader: false
        };
        default:
            return state;
    }
};

