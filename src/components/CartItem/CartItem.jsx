import {GoTrashcan} from 'react-icons/go'
import React from 'react';

const CartItem = ({ product, removeFromCart, id }) => {
    return (
        <li>Product {product.name} costs ${product.price}. <small>{product.description} </small> <GoTrashcan onClick={() => removeFromCart(id)}/> </li> 
    );
}

export default CartItem;
