const endPointId = '837c8324da0f47d1b9c3559f025e96b3';

// export const uri = `https://crudcrud.com/api/30e4417606504555bc750b1fe4f252e6/vegetables`;
export const uri = `https://crudcrud.com/api/${endPointId}/vegetables`;

export const getData = async (uri) => {
  try {
    const promise = await axios.get(uri);
    return promise.data;
  } catch (error) {
    console.log('Loading Error:', error);
  }
}

export const postData = async (uri, data) => {
  try {
    const promise = await axios.post(uri, data);
    return promise.data;
  } catch (error) {
    console.log("Error Post Data:", error);
  } 
}

export const putData = async (uri, id, data) => {
  try {
    await axios.put(`${uri}/${id}`, data);
    return true;
  } catch (error) {
    console.log('Error while updating:', error);
    return false;
  }
}

export const deleteData = async (uri, id) => {
  try {
    await axios.delete(`${uri}/${id}`);
    return true;
  } catch (error) {
    console.log('Not Exist:', error);
    return false;
  }
}