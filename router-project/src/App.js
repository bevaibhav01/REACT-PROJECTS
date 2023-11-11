import "./App.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { Route,Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLogged,setLogged]=useState(false);
  return <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
    
    <Navbar  isLogged={isLogged} setLogged={setLogged}></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login setLogged={setLogged}/>}/>
      <Route path="/signup" element={<Signup setLogged={setLogged}/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>

    </Routes>
  </div>;
}

export default App;
