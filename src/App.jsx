//Navbar section
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
//Views
import Favorites from "./views/Favorites";
import Home from "./views/Home";
//Fetch section
import axios from 'axios';
import { useEffect } from 'react';
const PHOTO_URL = "/photos.json";

const App = () => {

  useEffect(() => {
    fetchPhotos();
  }, []);
  
  const fetchPhotos = async () => {
    axios
      .get(PHOTO_URL)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log("Error al obtener datos de la API:", err);
      });
  };

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>
    </div>
  );
};
export default App;
