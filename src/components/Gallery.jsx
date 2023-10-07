import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";
import IconHeart from "./IconHeart";

const Gallery = () => {

  const {gallery, setGallery} = useContext(GalleryContext)

  const changeLike = (idElementOfButton) => {
    const indexOfItemInArray = gallery.findIndex(item => item.id === parseInt(idElementOfButton));
    const newGallery = gallery.map((photo) => 
      {if(photo.id == gallery[indexOfItemInArray].id){
        photo.liked = !photo.liked}
      return photo
      })
    //console.log(indexOfItemInArray,gallery[indexOfItemInArray].id,idElementOfButton,newGallery,newGallery[indexOfItemInArray].liked)
    setGallery(newGallery)
    //console.log("Eureka",gallery[indexOfItemInArray].liked)
  }

  return <div className="gallery grid-columns-5 p-3">
    {gallery == []
          ? '' 
          : 
          gallery.map(el =>
            <div onClick={() => changeLike(`${el.id}`)} className="photo" key={el.id} style={{backgroundImage: `url(${el.src.original})`}}>
              {el.src.liked ?  <IconHeart filled={true} /> : <IconHeart filled={false}/>}
              {el.alt}
              {el.id}
            </div>
          )
        }
  </div>;
};

export default Gallery;