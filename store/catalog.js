import axios from "axios"


export const actions = {
  async fetchCatalog({req, params, store}) {
    const data =  await axios.get(process.env.baseURL + '/catalogdata.json').then(
      res => res.data
    )
    return {data}
  },
  async fetchCatalogById({req, params, store}, id) {
    const data =  await axios.get(process.env.baseURL + '/catalogdata.json').then(
      res => res.data.find( n => n.id == id)
    )
    return {data}
  },
  async fetchProducts({req, params, store}, id) {
    const data =  await axios.get(process.env.baseURL + '/products.json').then(
      res => res.data.find( n => n.id == id)
    )
    return {data}
  },

 

}