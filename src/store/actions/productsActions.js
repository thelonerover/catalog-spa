import actionTypes from "../actionTypes/productActionTypes";

export const getProductsRequest = page => {
    return async function(dispatch) {
        const url = page ? `http://localhost:3000/products/page/${page}` : "http://localhost:3000/products";
        dispatch({ type: actionTypes.getProductsRequest });

        let response;
        try {
            response = await fetch(url);
            let body = await response.json();

            if (response.ok) {
                dispatch(getProductSuccess());
                dispatch(setProductsList(body.products));
            } else {
                getProductFailure();
            }
        } catch (error) {
            console.error(error)
        }
    }
}

export const getProductSuccess = () => ({type: actionTypes.getProductSuccess});

export const getProductFailure = () => ({type: actionTypes.getProductFailure});

export const getProductPagesNumber = offset => {
    return async function(dispatch) {
        dispatch({ type: actionTypes.getProductPagesNumber });

        let response;
        try {
            response = await fetch("http://localhost:3000/products");
            let body = await response.json();
            if (response.ok) {
                dispatch(setProductPagesNumber(Math.ceil(body.products.length / offset)));
            }
        } catch (error) {
            console.error(error);
        }
    }
}

export const setProductPagesNumber = pagesNumber => ({
    type: actionTypes.setProductPagesNumber,
    pagesNumber
});

export const setProductsList = items => ({
    type: actionTypes.setProductsList,
    items
});

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

        let response;
        try {
            response = await fetch("http://localhost:3000/products", requestOptions);

            if (response.ok) {
                dispatch(addProductSuccess());
            } else {
                dispatch(addProductFailure());
            }
        } catch (error) {
            console.error(error);
        }
    }
}

export const addProductSuccess = () => ({type: actionTypes.addProductSuccess});

export const addProductFailure = () => ({type: actionTypes.addProductFailure});

export const resetProducts = () => ({type: actionTypes.resetProducts});