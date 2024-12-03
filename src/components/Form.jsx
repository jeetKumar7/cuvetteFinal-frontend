import React from "react";
import styles from "./Form.module.css";
import logo from "../assets/LOGO 1.png";
import { ToastContainer } from "react-toastify";
import {useNavigate} from 'react-router-dom'

function Form_Fields({ field,hanleKeyPress }) {
  return (
    <div style={{ marginTop: "2%", display: "flex", flexDirection: "column" }}>
      <label htmlFor={field.name} style={{ fontSize: "12px" }}>
        {field.label}
      </label>
      <input
        type={field.type}
        placeholder={field.placeholder}
        name={field.name}
        value={field.value}
        onChange={field.onchange}
        className={styles.input_field}
        onKeyPress={hanleKeyPress}
      />
    </div>
  );
}

export default function Form({
  formFeilds,
  error,
  ErrorMessages,
  handleLogin,
  isNewUser,
  isLoading,
  hanleKeyPress
}) {

  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo image" className={styles.img} />

      <div className={styles.form_container}>
        <p style={{ fontWeight: "bold", fontSize: "17px", marginTop: "-3%" }}>
          Welcome Back 👋
        </p>
        <p style={{ marginTop: "-0.5%", fontSize: "12px" }}>
          Today is a new day. It's your day. You shape it.
        </p>
        <span style={{ fontSize: "12px" }}>Sign in to start ordering.</span>

        {formFeilds.map((field, index) => {
          return (
            <>
              <Form_Fields field={field} key={index} hanleKeyPress={hanleKeyPress} />
              {error[field.name] ? (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.8rem",
                    marginRight: "9rem",
                    marginTop: "0.1rem",
                  }}
                >
                  {ErrorMessages[field.name].message}
                </p>
              ) : null}
            </>
          );
        })}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            color: "#FC8A06",
            fontSize: "12px",
          }}
        >
        
        </div>

        <button className={styles.btn} onClick={handleLogin}>
          {isNewUser? (isLoading ? "Continuing..." : "Continue"): (isLoading ? "Logining...":"Login")}
        </button>

        <span style={{ fontSize: "12px", marginTop: "2.5%", marginLeft: "5%" }}>
          {isNewUser ? "Already have an account ?":"Don't you have an account?"}{" "}
          <span>
            <u style={{ color: "#FC8A06", cursor: "pointer" }} onClick={()=>navigate(isNewUser ? '/login':'/')}>{isNewUser ? "Sign In":"Sign up"}</u>
          </span>
        </span>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
