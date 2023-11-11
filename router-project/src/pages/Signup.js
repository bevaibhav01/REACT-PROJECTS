import React from 'react'
import signImg from '../assets/signup.png'
import Template from '../components/Template'

const Signup = ({setLogged}) => {
  return (
    <div>
         <Template
        title="Join the millions learning to code with studynotion for free"
        desc1="Build skills for , tommorow and beyond"
        desc2="Education to future-proof your carrier"
        image={signImg} 
        formtype="signup"
        setLogged={setLogged}



        ></Template>
    </div>
  )
}

export default Signup