import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let total =0;
    for (const product of cart) {
        total = total + product.price;
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Order items : {props.cart.length}</h5>
            <p>Total Price: {total}</p>
        </div>
    );
};

export default Cart;