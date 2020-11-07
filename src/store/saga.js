import { call, put, takeEvery } from 'redux-saga/effects'
import { actionTypes, getReposFromCompanyResponse, getSingleRepoResponse } from './actions';
import { getRepoList, getSingleRepo } from '../constants/api.constants';

const getRepositoriesFromCompaniesEffect = function* (action) {
    try {
        const response = yield call(getRepoList, action.payload);
        yield put(getReposFromCompanyResponse(response));
    } catch (error) {
        console.error('saga error', error);
    }
};

const getSingleRepositoryEffect = function* (action) {
    try {
        const response = yield call(getSingleRepo, action.payload.company, action.payload.repoName);
        yield put(getSingleRepoResponse(response));
    } catch (error) {
        console.error('saga error', error);
    }
};


export const coreSaga = function* () {
    yield takeEvery(actionTypes.getReposFromCompanyRequest, getRepositoriesFromCompaniesEffect);
    yield takeEvery(actionTypes.getSingleRepoRequest, getSingleRepositoryEffect);
};