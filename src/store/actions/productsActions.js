import actionTypes from "../actionTypes/productActionTypes";

export const getProductsRequest = params => async dispatch => {
    let url = "http://localhost:3000/products";

    if(params.page) {
        url += `/page/${params.page}`;
    }
    if(params.queryParams) {
        let queryParams = [];
        for(let param in params.queryParams) {
            if(params.queryParams[param] !== "") {
                queryParams.push(`${param}=${params.queryParams[param]}`);
            }
        }
        queryParams = queryParams.join("&");
        if (queryParams.length > 0) {
            url += `/?${queryParams}`;
        }
    }

    dispatch({ type: actionTypes.getProductsRequest });

    let response;
    try {
        response = await fetch(url);
        let body = await response.json();
        
        if (response.ok) {
            dispatch(getProductsSuccess());
            dispatch(setProductPagesNumber(body.numberOfPages));
            dispatch(setProductsList(body.products));
        } else {
            dispatch(getProductsFailure());
        }
    } catch (error) {
        console.error(error)
    }
}


export const getProductsSuccess = () => ({type: actionTypes.getProductsSuccess});

export const getProductsFailure = () => ({type: actionTypes.getProductsFailure});

export const updateProduct = productData => async dispatch => {
    const url = `http://localhost:3000/products/${productData.id}`;
    dispatch({ type: actionTypes.updateProductRequest });

    const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({...productData})
    }

    let response;
    try {
        response = await fetch(url, requestOptions);
        
        if (response.ok) {
            dispatch(udpateProductSuccess());
        } else {
            dispatch(udpateProductFailure());
        }
    } catch (error) {
        console.error(error)
    }
}

export const udpateProductSuccess = () => ({type: actionTypes.updateProductSuccess});

export const udpateProductFailure = () => ({type: actionTypes.updateProductFailure});

export const setProductPagesNumber = pagesNumber => ({
    type: actionTypes.setProductPagesNumber,
    pagesNumber
});

export const setProductsList = items => ({
    type: actionTypes.setProductsList,
    items
});

export const setProductsPage = page => ({
    type: actionTypes.setProductsPage,
    page
});


export const addProduct = product => async dispatch => {
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


export const addProductSuccess = () => ({type: actionTypes.addProductSuccess});

export const addProductFailure = () => ({type: actionTypes.addProductFailure});

export const resetProducts = () => ({type: actionTypes.resetProducts});

export const deleteProduct = id => async dispatch => {
    dispatch({type: actionTypes.deleteProduct});
    try {
        await fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" });
    } catch (error) {
        console.log(error);
    }
};

export const setErrorMessage = error => ({
    type: actionTypes.setErrorMessage,
    error
});

export const setCurrentAction = currentAction => ({
    type: actionTypes.setCurrentAction,
    currentAction
});

export const setQueryParams = queryParams => ({
    type: actionTypes.setQueryParams,
    queryParams
});

export const showEditingModal = () => ({
    type: actionTypes.showEditingModal,
});

export const closeEditingModal = () => ({
    type: actionTypes.closeEditingModal,
});

export const setCurrentProduct = product => ({
    type: actionTypes.setCurrentProduct,
    product
});