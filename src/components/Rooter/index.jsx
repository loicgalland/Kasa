import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Hotel from "../../pages/Hotels";
import Error from "../../pages/404";


function Rooter() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/hotel/:idHotel" element={<Hotel />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default Rooter;
