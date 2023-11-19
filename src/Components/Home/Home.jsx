import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";
import Cart from "../Cart/Cart";
import toast from "react-hot-toast";

const Home = () => {
  const tshirt = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddtoCart = (TShirt) => {
    const exist = cart.find((ts) => ts._id === TShirt._id);
    if (exist) {
      toast.error("This product is already added !!!");
    } 
    else {
      const newCart = [...cart, TShirt];
      setCart(newCart);
    }
  };

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };

  return (
    <div className="home-container">
      <div className="t-shirts-container">
        {tshirt.map((TShirt) => (
          <Tshirt
            key={tshirt._id}
            TShirt={TShirt}
            handleAddtoCart={handleAddtoCart}
          ></Tshirt>
        ))}
      </div>

      <div className="carts-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
