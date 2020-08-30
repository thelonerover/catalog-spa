import actionTypes from "../actionTypes/productActionTypes";
import productStatuses from "../../constants/productStatuses";

const initialState = {
    items: [],
    pagesNumber: 1,
    page: 1,
    currentStatus: "",
    error: "",
    filters: {}
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

        case actionTypes.updateProductRequest:
            return {
                ...state,
                page: action.page,
                currentStatus: productStatuses.updateProductRequest,
            };

        case actionTypes.updateProductSuccess:
            return {
                ...state,
                page: action.page,
                currentStatus: productStatuses.updateProductSuccess,
            };

        case actionTypes.updateProductFailure:
            return {
                ...state,
                page: action.page,
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
                currentStatus: productStatuses.setCurrentStatus,
                status: action.status 
            };

        case actionTypes.setProductFilters:
            return {
                ...state,
                currentStatus: productStatuses.setProductFilters,
                filters: {...action.filters} 
            };
            
        default: 
            return state;
    }
}