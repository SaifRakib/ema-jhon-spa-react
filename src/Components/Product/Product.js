import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const {name,category,seller,price,img,stock} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />    
            </div>
            <div className="product-info">
                <h4>{name}</h4>
                <h5>{category}</h5>
                <p><small>by </small>{seller}</p>
                <div className = "proInfo-inner">
                    <div>
                        <p>${price}</p>
                        <p><small>only <b>{stock}</b> left in stock - order soon</small></p>  
                    </div>
                </div>
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular">Add to Cart</button>
            </div>   
        </div>
    );
};

export default Product;