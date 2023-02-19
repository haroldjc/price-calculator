import axios from "axios";

const baseURL = `http://localhost:3001/categories`

const getAll = () => {
  const request = axios.get(baseURL)
  return request.then(response => response.data)
}

const create = categoryObject => {
  const request = axios.post(baseURL, categoryObject)
  return request.then(response => response.data)
}

const update = categoryObject => {
  const request = axios.put(`${baseURL}/${categoryObject.id}`, categoryObject)
  return request.then(response => response.data)
}

const remove = id => {
  const request = axios.delete(`${baseURL}/${id}`)
  return request
}

export default { getAll, create, update, remove }