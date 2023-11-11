import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'
const Login = ({setLogged}) => {
  return (
    <div>
        <Template
        title="welcome back"
        desc1="Build skills for , tommorow and beyond"
        desc2="Education to future-proof your carrier"
        image={loginImg} 
        formtype="login"
        setLogged={setLogged}



        ></Template>
    </div>
  )
}

export default Login