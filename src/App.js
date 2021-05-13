import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import Photo from "./components/POTD/POTD";

const apod_url = `https://api.nasa.gov/planetary/apod?api_key=2ck2z3EFkCQivTfwdMlszYlGHyMoHaTaVKFvd7jH`;

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
      <Photo data={data} />
      <h3>More on this Photo</h3>
      <div>
        <p>{data.explanation}</p>
      </div>
    </div>
  );
}

export default App;
