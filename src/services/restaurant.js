import axios from 'axios'

export const FetchFoodData  = async (field)=>{
  try {
    const res = await axios.get(`${import.meta.env.VITE_SOME_KEY}/food/${field}`)
    return res
  } catch (error) {
    return error
  }
}