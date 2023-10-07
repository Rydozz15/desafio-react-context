import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";
import IconHeart from "./IconHeart";
const Gallery = () => {
  const {gallery, setGallery} = useContext(GalleryContext)
  return <div className="gallery grid-columns-5 p-3">
    {gallery == []
          ? '' 
          : 
          gallery.map(el =>
            <div className="photo" key={el.id} style={{backgroundImage: `url(${el.src.original})`}}>
              {el.src.liked ?  <IconHeart filled={true} /> : <IconHeart filled={false}/>}
              {el.alt}
            </div>
          )
        }
  </div>;
};
export default Gallery;
