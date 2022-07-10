import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";

function App() {
  let pages = ["Home", "Shop", "Checkout"];
  let [order, setOrder] = useState([
    {
      id: 1,
      image: null,
      imageAlt: "Apple pie",
      productName: "Apple Pie",
      quantity: 0
    },
    {
      id: 2,
      image: null,
      imageAlt: "Blueberry pie",
      productName: "Blueberry Pie",
      quantity: 0
    },
    {
      id: 3,
      image: null,
      imageAlt: "Cherry pie",
      productName: "Cherry Pie",
      quantity: 0
    },
    {
      id: 4,
      image: null,
      imageAlt: "Coconut cream pie",
      productName: "Coconut Cream Pie",
      quantity: 0
    },
    {
      id: 5,
      image: null,
      imageAlt: "Key lime pie",
      productName: "Key Lime Pie",
      quantity: 0
    },
    {
      id: 6,
      image: null,
      imageAlt: "Pumpkin pie",
      productName: "Pumpkin Pie",
      quantity: 0
    }
  ]);
  let orderFunctions = [
    function addProduct(productName) {
      setOrder(
        order.map(item => {
          if (item.name === productName) {
            item.quantity++;
          };
          return item;
        })
      );
    },
    function removeProduct(productName) {
      setOrder(
        order.map(item => {
          if (item.name === productName) {
            item.quantity--;
          };
          return item;
        })
      );
    },
    function updateProduct(e, productName) {
      setOrder(
        order.map(item => {
          if (item.name === productName) {
            item.quantity = e.target.value;
          };
          return item;
        })
      );
    },
    function resetOrder() {
      setOrder(order.map(item => item.quantity = 0));
    }
  ];
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
