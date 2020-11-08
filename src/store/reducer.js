import { actionTypes } from './actions';
import { useSelector } from 'react-redux';

const initialState = {
    repos: [],
    loadingRepos: false,
    loadingSingleRepo: false,
    selected: null,
    filteredRepos: [],
    saved: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.getReposFromCompanyRequest:
            return { ...state, loadingRepos: true };
        case actionTypes.getReposFromCompanyResponse:
            return { ...state, repos: action.payload, loadingRepos: false, filteredRepos: action.payload };
        case actionTypes.getSingleRepoRequest:
            return { ...state, loadingSingleRepo: true };
        case actionTypes.getSingleRepoResponse:
            return { ...state, selected: action.payload, loadingSingleRepo: false, saved: null };
        case actionTypes.setFilterRepos:
            return { ...state, filteredRepos: state.repos.filter(repo => repo.name.toLowerCase().includes(action.filter.toLowerCase()) )};
        case actionTypes.saveRepositoryRequest:
            return { ...state, saved: false };
        case actionTypes.saveRepositoryResponse:
            return { ...state, saved: true };
        default:
            return state;
    }
};

export const useDataReducer = () => {
    return useSelector((state) => state.repos);
};

export const useReposReducer = () => {
    return useSelector((state) => state.reducer.repos);
};

export const useFilteredReposReducer = () => {
    return useSelector((state) => state.reducer.filteredRepos);
};

export const useLoadingReposReducer = () => {
    return useSelector((state) => state.reducer.loadingRepos);
};

export const useLoadingSingleRepoReducer = () => {
    return useSelector((state) => state.reducer.loadingSingleRepo);
};

export const useSelectedReducer = () => {
    return useSelector((state) => state.reducer.selected);
};

export const useSavedReducer = () => {
    return useSelector((state) => state.reducer.saved);
};