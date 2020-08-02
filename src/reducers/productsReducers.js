import actionTypes from "../constants/productActionTypes";

const initialState = [];

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.getProducts:
            return state;

        case actionTypes.setProductsList:
            return [
                ...state,
                ...action.products
            ];

        default: 
            return state;
    }
}
