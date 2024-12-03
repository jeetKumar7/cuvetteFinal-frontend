import axios from 'axios'

export const addCard = async (data)=>{
  try {
    const res = await axios.post(`${import.meta.env.VITE_SOME_KEY}/payment/createPayment`,data,{
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


export const getCards= async()=>{
  try {
    const res = await axios.get(`${import.meta.env.VITE_SOME_KEY}/payment/getPayment`,{
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

export const getCardbyID = async (id)=>{
  try {
    const res = await axios.get(`${import.meta.env.VITE_SOME_KEY}/payment/getPaymentById/${id}`)
    return res
  } catch (error) {
    return error
  }
}

export const updateCard = async (id,data)=>{
  try {
    const res = await axios.put(`${import.meta.env.VITE_SOME_KEY}/payment/editPayment/${id}`,data,{
      headers:{
        Authorization: `${localStorage.getItem("token")}`
      }
    })
    return res
  } catch (error) {
    return error
  }
}

export const deleteCard = async (id)=>{
  try {
    const res = await axios.delete(`${import.meta.env.VITE_SOME_KEY}/payment/deletePayment/${id}`)
    return res
  } catch (error) {
    return error
  }
}