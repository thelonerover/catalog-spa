import actionTypes from "../constants/productActionTypes";

export const getProducts = () => {
    return dispatch => {
        dispatch({ type: actionTypes.getProducts });
        
        return fetch("http://localhost:3000/products")
            .then(response => response.json())
            .then(response => { dispatch(setProductsList(response.products)) });
    }
}

export const getProductsPage = page => {
    return dispatch => {
        dispatch({ type: actionTypes.getProductsPage });
        return fetch(`http://localhost:3000/products/page/${page}`)
            .then(response => response.json())
            .then(response => { dispatch(setProductsList(response.products)) });
    }
}

export const getProductPagesNumber = offset => {
    return dispatch => {
        dispatch({ type: actionTypes.getProductPagesNumber });

        return fetch("http://localhost:3000/products")
            .then(response => response.json())
            .then(response => {dispatch(setProductPagesNumber(Math.floor(response.products.length / offset)))});
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