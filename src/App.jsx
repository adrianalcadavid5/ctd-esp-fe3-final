import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Notfound from "./Routes/Notfound";
import Layout from "./Layouts/Layout";

function App() {
  return (
    <div className="mainContent">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/envio" element={<Contact />} />
          <Route path="/favoritos" element={<Favs />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
