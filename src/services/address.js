import axios from 'axios'

export const AddAddress = async(data)=>{
  
  try {
   const res = await axios.post(`${import.meta.env.VITE_SOME_KEY}/address/createAddress`,data,{
    headers:{
      Authorization: `${localStorage.getItem("token")}`,
      "Content-Type": "application/json"
    }
   }) 
   return res
  } catch (error) {
    return error
  }
}


export const getAddresses = async()=>{
  try {
     const res = axios.get(`${import.meta.env.VITE_SOME_KEY}/address/getUserAddress`,{
      headers:{
        Authorization: `${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      }
     })
     return res
  } catch (error) {
    return error
  }
}

export const deleteAddress = async (id)=>{
  try {
    const res = await axios.delete(`${import.meta.env.VITE_SOME_KEY}/address/deleteAddress/${id}`)
    return res
  } catch (error) {
    return error
  }
}


export const getAddressbyId  = async(id)=>{
  try {
    const res = await axios.get(`${import.meta.env.VITE_SOME_KEY}/address/getUserAddress/${id}`)
    return res
  } catch (error) {
    return error
  }
}

export const updateAddress = async (id,data)=>{
  try {
    const res = await axios.put(`${import.meta.env.VITE_SOME_KEY}/address/editAddress/${id}`,data)
    return res
  } catch (error) {
    return error
  }
}