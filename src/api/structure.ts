import { API_URL } from '../config/constants';
import { Node } from '../logic/Node';
const path = `${API_URL}/structure`;

export const downloadStructure = async (): Promise<Node> => {
  const response = await fetch(path);
  const json = await response.json();
  return json;
};

export const uploadStructure = () => {};
