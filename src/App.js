import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";

function App() {
  let pages = ["Home", "Shop", "Checkout"];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home pages={pages}/>}/>
        <Route path="/shop" element={<Shop pages={pages}/>}/>
        <Route path="/checkout" element={<Checkout pages={pages}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
