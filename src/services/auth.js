import axios from 'axios'

export const register = async (data)=>{
  try {
    const res = await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/register`,data,{
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
      }
     })
     return res
    
  } catch (error) {
    return error
    
  }
}


export const login =async(data)=>{
  try {
    const res = await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/login`,data,{
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
      }
     })
    return res
  } catch (error) {
    return error
  }
}

export const getUserById = async ()=>{
  try {
    const res = await axios.get(`${import.meta.env.VITE_SOME_KEY}/user/getProfile`,{
      headers:{
        Authorization: `${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
      }
     })
    return res
  } catch (error) {
    return error
  }
}


export const updateUser = async (data)=>{
  try {
    const res = await axios.put(`${import.meta.env.VITE_SOME_KEY}/user/updateProfile`,data,{
      headers:{
        Authorization: `${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
      }
     })
    return res
  } catch (error) {
    return error
  }
}