import React, { useState } from "react";
import styles from "./Login.module.css";
import Footer from "../components/Footer";
import image from "../assets/Art.png";
import Form from "../components/Form";
import {notify} from "../utils/notify";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";

export default function Login() {
  const navigate = useNavigate()
  const [isLoading ,setIsLoading] =useState(false)
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });

  const formFeilds = [
    {
      name: "email",
      type: "email",
      placeholder: "Enter email",
      label: "Email",
      value: formData.email,
      onchange: (e) => {
        setFormdata({ ...formData, email: e.target.value });
      },
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      label: "Password",
      value:formData.password,
      onchange : (e) =>{
        setFormdata({...formData,password:e.target.value})
      }
    },
  ];

  const [error, seterror] = useState({
    email: false,
    password: false,
  });

  const ErrorMessages = {
    email: {
      message: "Email is required",
      isValid: formData?.email?.length > 0,
      onError: () => {
        seterror((error) => ({ ...error, email: true }));
      },
    },
    password: {
      message: "Field is required",
      isValid: formData.password.length > 0,
      onError: () => {
        seterror((error) => ({ ...error, password: true }));
      },
    },
  };

  const handleLogin = async () => {
    let isError = false;
    Object.keys(ErrorMessages).forEach((key) => {
      if (!ErrorMessages[key].isValid) {
        isError = true;
        ErrorMessages[key].onError();
      }
    });


    if (!isError) {
      if(isLoading) return
      try {
        setIsLoading(true)
        const res = await login(formData)
        console.log(res)
        if(res.status === 201 && !res.data.success){
          notify("User Not Registered")
        }
        else if(res.status === 200){
          notify("Login Successfull")
          const {token}=res.data
          const{name}=res.data
          localStorage.setItem("token",token)
          localStorage.setItem("name",name)
          setTimeout(()=>{
            navigate('/home')
          },2000)
        }
        else if(res.status === 201 && res.data.success){
          notify("Invalid Password")
        }
        else if(res.status === 400){
          notify("Internal Server Error")
        }
      } 
      catch (error) {
        return error
      }
      finally{
        setIsLoading(false)
      }

    } 
    else {
      notify("Fields are required");
    }
  };

  const handleKeyPress =(event)=>{
    if(event.key === "Enter"){
      handleLogin()
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <Form
            formFeilds={formFeilds}
            error={error}
            ErrorMessages={ErrorMessages}
            handleLogin={handleLogin}
            isLoading={isLoading}
            hanleKeyPress={handleKeyPress}
            
          />
        </div>

        <div className={styles.right}>
          <img src={image} alt="Login Picture" className={styles.img} />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
