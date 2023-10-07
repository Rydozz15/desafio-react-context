//Navbar section
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
//Views
import Favorites from "./views/Favorites";
import Home from "./views/Home";
//Fetch section
import axios from 'axios';
import { useEffect, useState } from 'react';
const PHOTO_URL = "/photos.json";
//test
import IconHeart from "./components/IconHeart";

const App = () => {

  useEffect(() => {
    fetchPhotos();
  }, []);
  
  const [photos, setPhotos] = useState([])

  const fetchPhotos = async () => {
    axios
      .get(PHOTO_URL)
      .then((response) => {
        setPhotos(response.data.photos)
      })
      .catch((err) => {
        console.log("Error al obtener datos de la API:", err);
      });
  };

  return (
    <div style={{backgroundColor:"black"}}>
      <Navbar />
      <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:"1rem", padding:"1rem"}}>
        {photos == []
          ? '' 
          : 
          photos.map(el =>
            <div key={el.id} style={{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"end",padding:"1rem",width:"auto", height:"400px", backgroundImage: `url(${el.src.original})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "400px 400px"}}>
              {/* <img src={el.src.original} alt="" style={{width:"200px", height:"200px",objectFit:"cover"}}/> */}
              {el.src.liked ?  <IconHeart filled={true} /> : <IconHeart filled={false}/>}
              <p  style={{alignSelf:"center",color:"white"}}>{el.alt}</p>
            </div>
          )
        }
      </div>
      
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
