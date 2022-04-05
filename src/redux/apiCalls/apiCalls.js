// prettier-ignore
export const BASE_URL = 'https://api.spacexdata.com/v3/rockets/';

const getAllRocketsFromAPI = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};

export { getAllRocketsFromAPI };
