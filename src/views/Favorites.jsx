import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";
const Favorites = () => {

  const {gallery, setGallery} = useContext(GalleryContext)

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
      
      </div>
    </div>
  );
};
export default Favorites;
