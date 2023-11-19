import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h4>Order Summary: {cart.length}</h4>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>Remove</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
