import actionTypes from "../actionTypes/productActionTypes";

const initialState = {
    items: [],
    pagesNumber: 1,
    page: 1,
    currentStatus: ""
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

        default: 
            return state;
    }
}