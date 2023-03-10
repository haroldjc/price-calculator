import axios from "axios";

const baseURL = `http://localhost:3001/products`

const getAll = () => {
  const request = axios.get(baseURL)
  return request.then(response => response.data)
}

const create = productObject => {
  const request = axios.post(baseURL, productObject)
  return request.then(response => response.data)
}

const update = productObject => {
  const request = axios.put(`${baseURL}/${productObject.id}`, productObject)
  return request.then(response => response.data)
}

const remove = id => {
  const request = axios.delete(`${baseURL}/${id}`)
  return request
}

export default { getAll, create, update, remove }