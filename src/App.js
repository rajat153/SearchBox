import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState("");
  const [ads, setAds] = useState([]);

  const handleChange = (e) => {
    setData(e.target.value);
  };
  // console.log(data);
  // const fetchNotes = async() =>{
  //   const cc = await axios.get("http://localhost:7000/ads")
  //   console.log(cc)
  // }

  // useEffect(()=>{
  //   fetchNotes()

  // },[])

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:7000/ads`)
  //     .then((response) => {
  //       console.log(response.data);
  //       // console.log(data);
  //       setData(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);


  // function searching(inputVal){
  //   if(inputVal!==""){
  //     return ads.filter((t)=> t.primaryText === inputVal.tolowerCase())

  //   }

  // }





  const handleClick = () => {
    axios
      .get(`http://localhost:7000/ads?search=${data}`)
      .then((response) => {
        console.log(response.data);
        // console.log(data);
        setAds(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("df");
  };

  return (
    <>
      <div className="App">
        <h1>Search Advertisement</h1>
      </div>
      <div className="input_form">
        <label htmlFor="search">Search Ads:</label>
        <input type="text" id="search" value={data} onChange={handleChange} />
        <button onClick={handleClick}>Submit</button>
      </div>
      <div className="ads_container">
        {ads.map((item) => {
          return (
            <div className="ads" key={item.companyId}>
              <p>{item.primaryText}</p>
              <p>{item.description}</p>
              <p>{item.headline}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
