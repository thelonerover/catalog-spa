import actionTypes from "../constants/productActionTypes";

const initialState = {
    items: [],
    page: 1,
    pagesNumber: 1
};

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.getProducts:
            return state;

        case actionTypes.getProductsPage:
            return state;

        case actionTypes.setProductPagesNumber:
            return {
                ...state,
                pagesNumber: action.pagesNumber,
            };

        case actionTypes.setProductsList:
            return {
                ...state,
                items: action.items
            };

        default: 
            return state;
    }
}