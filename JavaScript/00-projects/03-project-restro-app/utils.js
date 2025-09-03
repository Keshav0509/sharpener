const endpointId = '';
export const uri = `https://crudcrud.com/api/${endpointId}/restroData`;

const axios = require('axios/dist/browser/axios.cjs');

export async function getData(uri) {
  try {
    const promise = await axios.get(uri);
    return promise.data;
  } catch (error) {
    return error;
  }
}

export async function postData(uri, data) {
  try {
    
  } catch (error) {
    return error;
  }
}