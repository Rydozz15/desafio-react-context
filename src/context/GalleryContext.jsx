import { createContext, useState } from "react";
//Fetch section
import axios from 'axios';
import { useEffect } from 'react';
const PHOTO_URL = "/photos.json";

export const GalleryContext = createContext();

const GalleryProvider = ({ children }) => {
    const [gallery, setGallery] = useState([]);
    
    //Fetch gallery
    useEffect(() => {
        fetchPhotos();
      }, []);
            
      const fetchPhotos = async () => {
        axios
          .get(PHOTO_URL)
          .then((response) => {
            setGallery(response.data.photos)
          })
          .catch((err) => {
            console.log("Error al obtener datos de la API:", err);
          });
      };
    
    return (
        <GalleryContext.Provider value={{ gallery, setGallery }}>
            {children}
        </GalleryContext.Provider>
    );
};

export default GalleryProvider;