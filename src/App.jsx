import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Notfound from "./Routes/Notfound";





function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/envio" element={<Contact/>}/>
            <Route path="/favoritos" element={<Favs/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="*" element={<Notfound/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;


/*
<Route path="/" element={<Home/>}/>
            <Route path="/envio" element={<Contact/>}/>
            <Route path="/favoritos" element={<Favs/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="*" element={<Notfound/>}/>


*/
