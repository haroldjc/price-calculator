import axios from "axios";

const baseURL = `http://localhost:3001/supplies`

const getAll = () => {
  const request = axios.get(baseURL)
  return request.then(response => response.data)
}

const create = personObject => {
  const request = axios.post(baseURL, personObject)
  return request.then(response => response.data)
}

const update = (personObject) => {
  const request = axios.put(`${baseURL}/${personObject.id}`, personObject)
  return request.then(response => response.data)
}

const remove = id => {
  const request = axios.delete(`${baseURL}/${id}`)
  return request
}

export default { getAll, create, update, remove }