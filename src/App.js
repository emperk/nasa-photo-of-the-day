import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Header from './components/Header/Header';
import Photo from './components/POTD/POTD';

const apod_url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`


function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apod_url)
      .then(response => console.log("response", response) || response.data)
      .catch(err => console.error(err))

      setData(result)
    }

    fetchData()
  }, [])
  
  return (
    <div className="App">
      <Header />
      <span>{data.title}</span>
      <Photo data={data} />
    </div>
  );
}

export default App;
