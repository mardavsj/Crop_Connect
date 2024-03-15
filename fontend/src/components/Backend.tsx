'use client'
import { log } from 'console';
import React,{useEffect,useState} from 'react'
import { json } from 'stream/consumers';

// import React, { useEffect, useState } from 'react';

interface Data {
  message: string;
}

const Backend: React.FC = () => {
  const [data, setData] = useState<Data | null>(null); // Specify the type of data

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/data');
      const jsonData: Data = await response.json(); // Ensure jsonData follows the Data interface
      setData(jsonData);
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <>
      <div>Backend</div>
      <div>{data?.message || 'No message available'}</div> {/* Use optional chaining to avoid errors */}
    </>
  );
};

export default Backend;
