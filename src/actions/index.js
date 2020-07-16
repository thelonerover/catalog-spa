const actionTypes = {
    logIn = "LOG_IN",
    setUserRole = "CHANGE_ROLE"
}

export const isAuthorized = (loggedIn) => ({
    type: actionTypes.logIn,
    loggedIn
});

export const setUserRole = (user, newRole) => ({
    type: actionTypes.setUserRole,
    user, 
    newRole
});

 