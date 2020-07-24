import axios from "axios"


export const actions = {
  async fetchContacts({req, params, store}) {
    const data =  await axios.get(process.env.baseURL + '/contacts.json')
    .then(
      res => res.data
    )
    return {data}
  },
  async fetchContactsById({req, params, store}, id) {
    const data =  await axios.get(process.env.baseURL + '/contacts.json')
    .then(
      res => res.data.find( n => n.path === id)
    )
    return {data}
  }, 
  async fetchContactsByType({req, params, store}, type) {
    const data =  await axios.get(process.env.baseURL + '/contacts.json').then(
      res => res.data.find( n => n.type === type)
    )
    return {data}
  }, 
}