export const actionTypes = {
    getReposFromCompanyRequest: 'GET_REPOS_FROM_COMPANY_REQUEST',
    getReposFromCompanyResponse: 'GET_REPOS_FROM_COMPANY_RESPONSE',
    getSingleRepoRequest: 'GET_SINGLE_REPO_REQUEST',
    getSingleRepoResponse: 'GET_SINGLE_REPO_RESPONSE',
    setFilterRepos: 'SET_FILTER REPOS',
    saveRepositoryRequest: 'SAVE_REPOSITORY_REQUEST',
    saveRepositoryResponse: 'SAVE_REPOSITORY_RESPONSE'
};

export const getReposFromCompany = (company) => {
    return { type: actionTypes.getReposFromCompanyRequest, payload: company }
}

export const getReposFromCompanyResponse = (payload) => {
    return { type: actionTypes.getReposFromCompanyResponse, payload }
};

export const getSingleRepo = (company, repoName) => {
    return { type: actionTypes.getSingleRepoRequest, payload: { company, repoName } }
}

export const getSingleRepoResponse = (payload) => {
    return { type: actionTypes.getSingleRepoResponse, payload }
};

export const setFilterRepos = (filter) => {
    return { type: actionTypes.setFilterRepos, filter }
};

export const saveRepositoryRequest = (repo) => {
    return { type: actionTypes.saveRepositoryRequest, repo }
}

export const saveRepositoryResponse = () => {
    return { type: actionTypes.getSingleRepoResponse, saved: true }
};