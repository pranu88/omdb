import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import { useState, useEffect } from "react";
function App() {
  const apiKey = "98e3fb1f";
 
  // -------->Establish State
  const [movie, setMovie] = useState(null);
  // ------------------------Functions
 const getMovie = async (searchterm) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchterm}`);
 
    const data = await response.json();
    console.log(data)
    setMovie(data);
    console.log("Current Movie : ", movie)
  };
 useEffect(() => {
    getMovie("frozen");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay currentMovie={movie}/>
   </div>
  );
}
export default App;

