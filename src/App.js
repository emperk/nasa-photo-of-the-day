import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import Photo from "./components/POTD/POTD";
import styled from 'styled-components'


const apod_url = `https://api.nasa.gov/planetary/apod?api_key=2ck2z3EFkCQivTfwdMlszYlGHyMoHaTaVKFvd7jH`;

const StyledSpan = styled.span`
  font-size: 1.5em;
  font-family: 'Roboto Mono';
`

const StyledPhotoInfo = styled.span`
  font-size: 1em;
  font-family: 'Roboto Mono';
`
const StyledPIDiv = styled.div`
  margin: 1% 15% 1% 15%;
`

const TitleH3 = styled.h3`
  font-size: 4vh;
  font-family: 'Roboto Mono';
`

const SpaceDiv = styled.div`
  margin-bottom: 15%;
`

function App() {

  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apod_url)
      .then(response => console.log("HERE IS THE RESPONSE: ", response) || response.data)
      .catch(error => console.log("HERE IS THE ERROR: ", error))

      setData(result)
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      <Header />
      <StyledSpan>{data.title}</StyledSpan>
      <Photo data={data} />
      <TitleH3>More on this Photo</TitleH3>
      <StyledPIDiv>
        <StyledPhotoInfo>{data.explanation}</StyledPhotoInfo>
      </StyledPIDiv>
    </div>
  );
}

export default App;
