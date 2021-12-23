import { useState, useEffect } from "react";
import "./App.css";
import ListProduct from "../src/Products/ListProduct";
import Cart from "./Products/Card";
import axios from "axios";
function App() {
  const [shoes, setShoes] = useState([]);

  const fetchData = () => {
    axios.get("https://json-server-0.herokuapp.com/api/shoes").then((res) => {
      if (res.status === 200) {
        setShoes(res.data);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="App">
        <div className="main-content">
          <ListProduct shoes={shoes} />
          <Cart shoes={shoes} />
        </div>
      </div>
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </div>
  );
}

export default App;
