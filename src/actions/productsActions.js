import actionTypes from "../constants/productActionTypes";

export const getProducts = url => {
    return async function(dispatch) {
        dispatch({ type: actionTypes.getProducts });
        
        let request = await fetch(url);
        let response = await request.json();

        dispatch(setProductsList(response.products));
    }
}

export const getProductPagesNumber = (url, offset) => {
    return async function(dispatch) {
        dispatch({ type: actionTypes.getProductPagesNumber });

        let request = await fetch(url);
        let response = await request.json();

        dispatch(setProductPagesNumber(Math.floor(response.products.length / offset)));
    }
}

export const setProductPagesNumber = pagesNumber => {
    return {
        type: actionTypes.setProductPagesNumber,
        pagesNumber
    }
}

export const setProductsList = items => {
    return {
        type: actionTypes.setProductsList,
        items
    }
}

export const setProductsPage = page => {
    return {
        type: actionTypes.setProductsPage,
        page
    }
}

export const addProduct = (url, product) => {
    return async function(dispatch) {
        dispatch({ type: actionTypes.createProduct });

        const requestOptions = { 
            method: "POST",
            headers: {  "Content-Type": "application/json" },
            body: JSON.stringify(product)
        };

        let request = await fetch(url, requestOptions);
        let response = await request.json();

        if (response.ok) {
            dispatch(addProductSuccess());
        } else {
            dispatch(addProductFailure("Wrong username or password."));
        }
    }
}

export const addProductSuccess = () => {
    return {
        type: actionTypes.addProductSuccess
    }
}

export const addProductFailure = () => {
    return {
        type: actionTypes.addProductFailure
    }
}