import actionTypes from "../constants/userActionTypes";

export const loginRequest = (login, password) => {
    return dispatch => {
        return async function() {
            const request = await fetch("http://localhost:3000/api/v1/users", { method: "POST" });

            if (request.status.ok) {
                const response = await request.json();
                console.log(response);
                dispatch({
                    type: actionTypes.loginRequest,
                    login,
                    password
                });
            } else {
                throw new Error("Oops, something went retardly wrong!: " + request.status);
            }
        }
    }
}

