import axios from "axios";

export const AddToCart = async (data)=>{
  try {
    const res = await axios.post(`${import.meta.env.VITE_SOME_KEY}/cart/addToCart`,data,{
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

export const getCartItems = async ()=>{
  try {
    const res = await axios.get(`${import.meta.env.VITE_SOME_KEY}/cart/getCartItems`,{
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

export const updateCartItems = async (id,data)=>{
  try {
    const res = await axios.put(`${import.meta.env.VITE_SOME_KEY}/cart/updateCart/${id}`,data,{
      headers:{
        "Content-Type":"application/json"
      }
    })
    return res
  } catch (error) {
    return error
  }
}

export const deleteCartItem = async (id) =>{
  try {
    const res = await axios.delete(`${import.meta.env.VITE_SOME_KEY}/cart/deleteCart/${id}`)
    return res
  } catch (error) {
    return error
  }
}