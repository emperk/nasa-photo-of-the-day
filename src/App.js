import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Header from './components/Header/Header';
import Photo from './components/POTD/POTD';
import styled from 'styled-components'

const apod_url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`

const StyledSpan = styled.span`
  font-size: 2em;
  font-family: 'Roboto Mono'
`

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
      <StyledSpan>{data.title}</StyledSpan>
      <Photo data={data} />
      <h3>More On This Photo</h3>
      <span>{data.explanation}</span>
    </div>
  );
}

export default App;
