import actionTypes from "../actionTypes/productActionTypes";
import productStatuses from "../../constants/productStatuses";
import productActionTypes from "../actionTypes/productActionTypes";

const initialState = {
    items: [],
    pagesNumber: 1,
    page: 1,
    currentStatus: "",
    error: "",
    queryParams: {},
};

console.log(productStatuses);

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
                currentStatus: productStatuses.updateProductRequest,
            };

        case actionTypes.updateProductSuccess:
            return {
                ...state,
                currentStatus: productStatuses.updateProductSuccess,
            };

        case actionTypes.updateProductFailure:
            return {
                ...state,
                currentStatus: productStatuses.updateProductFailure,
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
            
        default: 
            return state;
    }
}