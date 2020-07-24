
import axios from "axios"


export const actions = {
  async fetchCompany({req, params, store}) {
    const company =  await axios.get(process.env.baseURL + '/company.json').then(
      res => res.data
    )
    return {company}
  },
  async fetchCompanyById({req, params, store}, id) {
    const company =  await axios.get(process.env.baseURL + '/company.json').then(
      res => res.data.find( n => n.path === id)
    )
    return {company}
  }, 
}
