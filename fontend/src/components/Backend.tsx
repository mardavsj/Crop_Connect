'use client'
import { log } from 'console';
import React,{useEffect,useState} from 'react'
import { json } from 'stream/consumers';


const Backend = () => {
    const[data,setData] = useState({})
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData =async()=>{
        try{
            const response = await  fetch('http://localhost:5000/api/data');
            const jsonData = await response.json();
            setData(jsonData)
        }
        catch(error){
            console.log('Error',error);
            
        }
    }

  return (
    <>
    <div>Backend</div>
    {/* <div>div> */}
    </>
  )
}

export default Backend

