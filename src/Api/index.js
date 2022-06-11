import axios from "axios";

export const fetchBannersAPI = () => {
  return axios.get("https://api.npoint.io/fee177346e7875554413");
};

export const fetchFiltersAPI = () => {
  return axios.get("https://api.npoint.io/91298d970c27e9a06518");
};

export const fetchSlidesAPI = () => {
  return axios.get("https://api.npoint.io/fee177346e7875554413");
};

export const fetchNewsAPI = () => {
  return axios.get("https://api.npoint.io/d275425a434e02acf2f7");
};
