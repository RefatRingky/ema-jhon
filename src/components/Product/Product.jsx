import React from 'react';
import '../Product/Product.css'

const Product = (props) => {
    // console.log(props.product)
    
    const{img,name,seller, ratings, price} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)}  className='btn-cart'>
                Add to Cart
               
                </button>
        </div>
    );
};

export default Product;