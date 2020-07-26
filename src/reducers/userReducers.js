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
            return {...state, isLoggedIn: true};

        case actionTypes.loginFailure: 
            return state;

        case actionTypes.logout: 
            return {...state, isLoggedIn: false};

        default: 
            return state;
    }
}
