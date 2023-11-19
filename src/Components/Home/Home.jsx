import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = () => {
  const tshirt = useLoaderData();
  const [cart, setCart] = useState([]);

    const handleAddtoCart = TShirt =>{
       const newCart = [...cart, TShirt];
        setCart(newCart);
    } 

  return (
    <div className="home-container">
      <div className="t-shirts-container">
        {tshirt.map((TShirt) => (
          <Tshirt key={tshirt._id}
           TShirt={TShirt}
           handleAddtoCart={handleAddtoCart}
           ></Tshirt>
        ))}
      </div>

      <div className="carts-container">
      
        <Cart cart={cart}></Cart>
        </div>
    </div>
  );
};

export default Home;
