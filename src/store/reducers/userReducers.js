import actionTypes from "../constants/userActionTypes";
import userStatuses from "../constants/userStatuses";

const initialState = {
    isLoggedIn: false,
    curentStatus: userStatuses.notLoggedIn,
    error: ""
};

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.setErrorMessage:
            return {
                ...state,
                error: action.error
            };

        case actionTypes.loginRequest:
            return {
                ...state,
                curentStatus: userStatuses.loggingIn
            };

        case actionTypes.loginSuccess:
            return {
                ...state,
                isLoggedIn: true,
                curentStatus: userStatuses.loggedIn,
                email: action.email
            };

        case actionTypes.loginFailure:
            return {
                ...state,
                curentStatus: userStatuses.notLoggedIn,
            };

        case actionTypes.registrationRequest:
            return {
                ...state,
                curentStatus: userStatuses.registrationRequest
            };

        case actionTypes.registrationSuccess:
            return {
                ...state,
                curentStatus: userStatuses.registrationSuccess,
                error: ""
            };

        case actionTypes.registrationFailure:
            return {
                ...state,
                curentStatus: userStatuses.registrationFailure,
                error: action.error 
            };

        case actionTypes.logout:
            return initialState;

        default:
            return state;
    }
}
