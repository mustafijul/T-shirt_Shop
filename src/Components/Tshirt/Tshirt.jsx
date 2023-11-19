import React from "react";
import "./Tshirt.css";

const Tshirt = ({ TShirt,  handleAddtoCart }) => {
  const { name, price, picture, gender } = TShirt;

  return (
    <div className="t-shirt">
      <img src={picture} alt="Not found the image" />
      <p>Name: {name}</p>
      <p>Price: ${price}</p>
      <button onClick={ () => handleAddtoCart(TShirt)}>Buy Now</button>
    </div>
  );
};

export default Tshirt;
