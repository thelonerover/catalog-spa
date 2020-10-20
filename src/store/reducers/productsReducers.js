import actionTypes from "../actionTypes/productActionTypes";
import productActionTypes from "../actionTypes/productActionTypes";

const initialState = {
    items: [],
    pagesNumber: 1,
    page: 1,
    currentStatus: "",
    error: "",
    queryParams: {},
    showEditingModal: false,
    currentProduct: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.setProductPagesNumber:
            return {
                ...state,
                pagesNumber: action.pagesNumber,
            };

        case actionTypes.setProductsPage:
            return {
                ...state,
                page: action.page,
            };

        case actionTypes.setProductsList:
            return {
                ...state,
                items: action.items
            };

        case actionTypes.resetProducts: 
            return initialState;

        case actionTypes.getProductsRequest:
            return {
                ...state,
                currentStatus: productActionTypes.getProductsRequest,
            };

        case actionTypes.getProductsSuccess:
            return {
                ...state,
                currentStatus: productActionTypes.getProductsSuccess,
            };

        case actionTypes.getProductsFailure:
            return {
                ...state,
                currentStatus: productActionTypes.getProductsFailure,
            };

        case actionTypes.updateProductRequest:
            return {
                ...state,
                currentStatus: productActionTypes.updateProductRequest,
            };

        case actionTypes.updateProductSuccess:
            return {
                ...state,
                currentStatus: productActionTypes.updateProductSuccess,
            };

        case actionTypes.updateProductFailure:
            return {
                ...state,
                currentStatus: productActionTypes.updateProductFailure,
            };

        case actionTypes.setErrorMessage:
            return {
                ...state,
                error: action.error
            };

        case actionTypes.setCurrentStatus:
            return {
                ...state,
                status: action.status 
            };

        case actionTypes.setQueryParams:
            return {
                ...state,
                queryParams: {...state.queryParams, ...action.queryParams}
            };

        case actionTypes.showEditingModal:
            return {...state, showEditingModal: true};

        case actionTypes.closeEditingModal:
            return {...state, showEditingModal: false};

        case actionTypes.setCurrentProduct:
            return {...state, currentProduct: action.product};
            
        default: 
            return state;
    }
}