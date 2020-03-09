import {axiosInstance} from "./axios.constants";

export const getData = async (index) => await axiosInstance.get(`character/?page=${index}`);