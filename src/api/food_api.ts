import axiosInstance from 'api/core/api_core';
import apiLinks from 'api/core/api_links';
import Constants from 'constants/index';

export const searchFood = (searchTerm: string) =>
  axiosInstance.get(
    `${apiLinks.search}?q=${searchTerm}&app_id=${Constants.API_ID}&app_key=${Constants.API_KEY}`
  );
