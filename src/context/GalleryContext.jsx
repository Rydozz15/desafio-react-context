import { createContext, useState } from "react";

export const GalleryContext = createContext();

const GalleryProvider = ({ children }) => {
    const [gallery, setGallery] = useState([]);
    return (
        <GalleryContext.Provider value={{ gallery, setGallery }}>
            {children}
        </GalleryContext.Provider>
    );
};

export default GalleryProvider;