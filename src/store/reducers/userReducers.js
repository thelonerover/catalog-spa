import actionTypes from "../actionTypes/userActionTypes";
import userStatuses from "../../constants/userStatuses";

const initialState = {
    isLoggedIn: false,
    userType: "",
    currentStatus: userStatuses.notLoggedIn,
    error: ""
};

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.loginRequest:
            return {
                ...state,
                currentStatus: userStatuses.loginRequest,
                error: ""
            };

        case actionTypes.loginSuccess:
            return {
                ...state,
                isLoggedIn: true,
                userType: action.userType,
                currentStatus: userStatuses.loginSuccess,
                email: action.email,
                error: ""
            };

        case actionTypes.loginFailure:
            return {
                ...state,
                currentStatus: userStatuses.loginFailure,
                error: action.error
            };

        case actionTypes.registrationRequest:
            return {
                ...state,
                currentStatus: userStatuses.registrationRequestm,
                error: ""
            };

        case actionTypes.registrationSuccess:
            return {
                ...state,
                currentStatus: userStatuses.registrationSuccess,
                error: ""
            };

        case actionTypes.registrationFailure:
            return {
                ...state,
                currentStatus: userStatuses.registrationFailure,
                error: action.error 
            };

        case actionTypes.setErrorMessage:
            return {
                ...state,
                error: action.error
            };

        case actionTypes.setCurrentStatus:
            return {
                ...state,
                currentStatus: userStatuses.setCurrentStatus,
                status: action.status 
            };

        case actionTypes.logout:
            return initialState;

        default:
            return state;
    }
}
