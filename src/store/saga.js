import {call, put, select, takeEvery} from 'redux-saga/effects'
import {actionTypes, increaseIndexResponse, setAllItems} from "./actions";
import {getData} from "../constants/api.constants";
import {getIndex} from "./selectors";

const getAllItems = function* () {
    try {
        const index = yield select(getIndex);
        const response = yield call(getData, index);
        yield put(setAllItems(response.results));
    } catch (error) {
        console.error('saga error', error);
    }
};

const increaseIndexAndGetMoreData = function* () {
    try {
        yield put(increaseIndexResponse());
        const index = yield select(getIndex);
        const response = yield call(getData, index);
        yield put(setAllItems(response.results));
    } catch (error) {
        console.error('saga error', error);
    }
};

export const coreSaga = function* () {
    yield takeEvery(actionTypes.getAllItemsAction, getAllItems);
    yield takeEvery(actionTypes.increaseIndexRequest, increaseIndexAndGetMoreData);
};