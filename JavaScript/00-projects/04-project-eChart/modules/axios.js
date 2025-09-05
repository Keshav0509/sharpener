const endPointId = '8c45a05a07d0433d9de807eb382cc387';
export const uri = `https://crudcrud.com/api/${endPointId}/products`;

export const getProducts = async (uri) => {
  try {
    const promise = await axios.get(uri);
    return promise.data;
  } catch (error) {
    console.log('Error while loading products:', error);
  }
}

export const postProducts = async (uri, product) => {
  try{
    const promise = await axios.post(uri, product);
    return promise.data;
  }catch(error){
    console.log('Error while add product:', error);
  }
}

export const putProduct = async (uri, id, product) => {
  try {
    await axios.put(`${uri}/${id}`, product);
    return true;
  } catch (error) {
    console.log('Error while updating product:', error);
  }
}

export const deleteProduct = async (uri, id) => {
  try {
    await axios.delete(`${uri}/${id}`);
    return true;
  } catch (error) {
    console.log('Error while deleting product:', error);
  }
}