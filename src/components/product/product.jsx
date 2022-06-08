import { AiFillPlusCircle } from 'react-icons/ai'
const Product = ({ product, addToCart}) => {
    return (
        // console.log('We are inside Product', props)
        <li>Product {product.name} costs ${product.price}. <small>{product.description}</small> <AiFillPlusCircle onClick={() => addToCart(product)}/> </li> 
     
    )
}

export default Product