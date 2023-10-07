import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";
const Favorites = () => {

  const { gallery } = useContext(GalleryContext)

  return (
    <div>
      <h1 className="App">Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
      {gallery == []
          ? '' 
          : 
          gallery.filter(el => el.liked).map(el =>
            <div className="photo" key={el.id} style={{backgroundImage: `url(${el.src.original})`}}>
            </div>
          )
        }
      </div>
    </div>
  );
};
export default Favorites;
