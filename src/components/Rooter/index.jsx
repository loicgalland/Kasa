import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Propos from "../../pages/Apropos";
import Hotel from "../../pages/Hotels";
import Error from "../../pages/404";


function Rooter() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/apropos" element={<Propos />}/>
        <Route path="/hotel/:idHotel" element={<Hotel />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default Rooter;
