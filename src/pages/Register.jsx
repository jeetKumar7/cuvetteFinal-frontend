import React,{useState} from 'react'
import styles from './Register.module.css'
import Footer from '../components/Footer'
import image from "../assets/Art.png";
import Form from '../components/Form';
import {notify, Promisenotify} from '../utils/notify';
import { register } from './../services/auth';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate()
  const [formData, setFormdata] = useState({
    name:'',
    mobile:'',
    email: "",
    password: "",
  });

  const [isLoading,setisLoading] =useState(false)
  const [error, seterror] = useState({
    name:false,
    mobile:false,
    email: false,
    password: false,
  });

  const formFeilds = [

    {
      name: "name",
      type: "text",
      placeholder: "Enter Name",
      label: "Name",
      value: formData.name,
      onchange: (e) => {
        setFormdata({ ...formData, name: e.target.value });
      },
    },
    {
      name: "mobile",
      type: "text",
      placeholder: "Enter Mobile Number",
      label: "Mobile Number",
      value:formData.mobile,
      onchange : (e) =>{
        setFormdata({...formData,mobile:e.target.value})
      }
    },
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

  const ErrorMessages = {
    name: {
      message: "Name is required",
      isValid: formData?.name?.length > 0,
      onError: () => {
        seterror((error) => ({ ...error, name: true }));
      },
    },
    mobile: {
      message: "Mobile number should be of length 10",
      isValid: formData.mobile.length > 10,
      onError: () => {
        seterror((error) => ({ ...error, mobile: true }));
      },
    },
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
      console.log(formData)
      if(isLoading) return
      try {
        setisLoading(true)
        const res = await register(formData)
        if(res.status ===200){
          notify("User Registration Successfully")
          setTimeout(()=>{
             navigate('/login')
          },2000)
        }
        else if(res.status === 201){
          notify("User Already Exist")
        }
        else if(res.status === 400){
          notify("Invalid Request")
        }
      } catch (error) {
        
      }finally {
        setisLoading(false)
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
          isNewUser ={true}
          isLoading = {isLoading}
          hanleKeyPress={handleKeyPress}
          />


        </div>


        <div className={styles.right}>
        <img src={image} alt="Login Picture" className={styles.img} />

        </div>

      </div>
      
      <div className={styles.footer}>
        <Footer/>

      </div>

    </div>
  )
}
