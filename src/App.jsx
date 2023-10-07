//Navbar section
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
//Views
import Favorites from "./views/Favorites";
import Home from "./views/Home";

//Conext Provider
import GalleryProvider from "./context/GalleryContext";

const App = () => {
  
  return (
    <div>
      <GalleryProvider>
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
      </GalleryProvider>
    </div>
  );
};
export default App;
