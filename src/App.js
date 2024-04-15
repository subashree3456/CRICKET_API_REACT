import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Button } from "@material-ui/core";
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import { getMatches } from "./api/api";
import { Container, Grid, Typography } from "@material-ui/core";

function App() {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      // .then((data) => setMatches(data.matches))
      //.then((data) => console.log("DATA" , data))
      .then((data) => {
        setMatches(data.results);
        console.log(data.results);
      })
      .catch((error) => alert("could not load data"));
  }, []);

  console.log(matches);
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to my Live score APP</h1>

      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
        {matches?.map((match)=>(
        <MyCard match="match" />
      ))}
        </Grid>
      </Grid>
          </div>
  );
}

export default App;



// 05f886e2-9752-42e1-8b05-32877f54059a

// https://cricapi.com/api/matches/