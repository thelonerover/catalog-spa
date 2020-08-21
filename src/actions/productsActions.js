import actionTypes from "../constants/productActionTypes";

export const getProducts = page => {
    return async function(dispatch) {
        dispatch({ type: actionTypes.getProducts });

        const url = page ? `http://localhost:3000/products/page/${page}` : "http://localhost:3000/products";

        let request = await fetch(url);
        let response = await request.json();

        dispatch(setProductsList(response.products));
    }
}

export const getProductPagesNumber = offset => {
    return async function(dispatch) {
        dispatch({ type: actionTypes.getProductPagesNumber });

        let request = await fetch("http://localhost:3000/products");
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

export const addProduct = product => {
    return async function(dispatch) {
        dispatch({ type: actionTypes.addProduct });

        const requestOptions = { 
            method: "POST",
            headers: {  "Content-Type": "application/json" },
            body: JSON.stringify(product)
        };

        let request = await fetch("http://localhost:3000/products", requestOptions);
        let response = await request.json();

        if (response.ok) {
            dispatch(addProductSuccess());
        } else {
            dispatch(addProductFailure());
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