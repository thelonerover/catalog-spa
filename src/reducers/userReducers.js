import actionTypes from "../constants/userActionTypes";

const initialState = {
    isLoggedIn: false,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.loginRequest:
            return state;

        case actionTypes.loginSuccess: 
            localStorage.setItem("login", action.login);
            localStorage.setItem("password", action.password);
            break;

        case actionTypes.loginFailure: 
            return {...state, isLoggedIn: false};

        default: 
            return state;
    }
}
