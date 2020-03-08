import {actionTypes} from "./actions";
import {useSelector} from "react-redux";

const initialState = {
    data: [],
    index: 1
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.setAllItemsAction:
            return {...state, data: state.data.concat(action.payload)};
        case actionTypes.addItemAction:
            return {...state, data: state.data.concat(action.payload)};
        case actionTypes.removeItemAction:
            return {...state, data: state.data.filter(el => el !== action.payload)};
        case actionTypes.increaseIndexResponse:
            return {...state, index: state.index + 1};
        default:
            return state;
    }
};

export const useDataReducer = () => {
    return useSelector((state) => state.data);
};
