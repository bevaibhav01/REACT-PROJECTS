import React, { useState,useEffect } from "react";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import {apiUrl,filterData} from './data';
import Spinner from './components/Spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  let [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
  
  async function fetchData(){
    try{
      let response=await fetch(apiUrl);
      let output=await response.json();
      console.log(output);
      setCourses(output.data)


    }catch(e){
      toast.error("went galat");

    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return <div className="min-h-screen flex flex-col">
   <div>
    <Navbar></Navbar>
   </div>
   <div className="bg-bgDark2">
   <div>
    <Filter filterData={filterData}></Filter>
   </div>
   <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">{
     (loading?(<Spinner></Spinner>):
    (<Cards data={courses}></Cards>))
   }
   </div>
   </div>
  </div>;
};

export default App;
