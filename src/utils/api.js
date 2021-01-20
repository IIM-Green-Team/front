import axios from "axios"
import { API_HOST } from "./constants"

/**
 * Get from api
 * @param {string} endpoint the api endpoint
 * @param {any} fallbackData object|array to fallback if api is down 
 */
export const getApi = async (endpoint, fallbackData) => {
  try {
    const data = await axios.get(`${API_HOST}${endpoint}`)
    return data
  } catch(e) {
    return { data: fallbackData }
  }
}