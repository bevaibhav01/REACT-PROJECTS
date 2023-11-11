import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY


export default function Tag() {
  function clickHandler(){
    fetchData();

  }
  const [tag,setTag]=useState('');


  async function fetchData() {
    const url =  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    try {
      const response = await axios.get(url);
      //console.log(response);
      const {data}=response;
      const imgLink=data.data.images.downsized_large.url;
      //console.log(imgLink);
      setGif(imgLink);
      // Handle the response data, update the gif state, etc.
    } catch (error) {
      if (error.response) {
        console.error("Request failed with status code", error.response.status);
      } else {
        console.error("An error occurred:", error.message);
      }
    }
  }
  
 useEffect(()=>{
  fetchData();

 },[])
  const [gif,setGif]=useState("");
 
  return <div className=" flex flex-col items-center gap-y-5 w-1/2  rounded-lg border border-black bg-green-500">
    <h1 className="text-2xl underline uppercase font-bold">A Random GIF</h1>
    
    
    <img src={gif} width="450" />

    <input type="text" value={tag} onChange={(event)=>{setTag(event.target.value)}}></input>


    <button className=" mb-[20px] w-10/12 bg-yellow-500 text-lg rounded-lg py-2" onClick={clickHandler}>Genrate</button>
  </div>;
}
