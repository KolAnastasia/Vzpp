
import axios from "axios"


export const actions = {
  async fetchCareer({req, params, store}) {
    const career =  await axios.get(process.env.baseURL + '/career.json').then(
      res => res.data
    )
    return {career}
  },
  async fetchCareerById({req, params, store}, id) {
    const career =  await axios.get(process.env.baseURL + '/career.json').then(
      res => res.data.find( n => n.path === id)
    )
    return {career}
  }, 
}
