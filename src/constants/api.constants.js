import {axiosInstance} from './axios.constants';

export const getRepoList = async (orgId) => await axiosInstance.get(`${orgId}`);

export const getSingleRepo = async (orgId, repoName) => await axiosInstance.get(`${orgId}/${repoName}`);