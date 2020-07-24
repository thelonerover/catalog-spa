import actionTypes from "../constants/userActionTypes";

const initialState = {
    isLoggedIn: false,
    login: "",
    password: ""
};

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.loginRequest:
            return {
                ...state,
                login: action.login,
                password: action.password
            };
        default: 
            return state;
    }
}
