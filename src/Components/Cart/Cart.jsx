import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
              <h4>Order Summary: {cart.length}</h4>
              {
                cart.map(tshirt => <p>{tshirt.name}</p> )
              }
        </div>
    );
};

export default Cart;