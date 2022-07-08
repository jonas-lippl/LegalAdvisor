import { API_URL } from '../config/constants';
const path = `${API_URL}/structure`;

export const downloadStructure = async () => {
  const response = await fetch(path);
  const json = await response.json();
  console.log('response: ', json);
};

export const uploadStructure = () => {};
