export const actionTypes = {
    getAllItemsAction: 'GET_ALL_ITEMS',
    setAllItemsAction: 'SET_ALL_ITEMS',
    addItemAction: 'ADD_ITEM',
    removeItemAction: 'REMOVE_ITEM',
    increaseIndexRequest: 'INCREASE_INDEX_REQUEST',
    increaseIndexResponse: 'INCREASE_INDEX_RESPONSE'
};

export function getAllItems() {
    return {type: actionTypes.getAllItemsAction}
}

export function setAllItems(items) {
    return {type: actionTypes.setAllItemsAction, payload: items}
}

export const addItem = item => {
    return {type: actionTypes.addItemAction, payload: item}
};

export function removeItem(item) {
    return {type: actionTypes.removeItemAction, payload: item}
}

export const increaseIndexRequest = () => {
    return {type: actionTypes.increaseIndexRequest}
};

export const increaseIndexResponse = () => {
    return {type: actionTypes.increaseIndexResponse}
};
