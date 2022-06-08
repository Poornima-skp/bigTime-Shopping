// Hooks
import { useState } from 'react';
// Components
import Product from '../product/product';
import Preview from '../Preview/Preview'
import CartItem from '../CartItem/CartItem';
// Data
import productsData from '../../utilities/data';
// CSS 
import './App.css';


// Functional components are STATELESS
// Class components are STATEFULL
// Fuctional components does not  have "this." command, thats only for class component
function App() {
  // console.log('App.js',productsData)
  // DOC useState;
  // Call useState at the top level of your component
  // Convention: const [something, setSomething] = useState(initial value) "using array destructuring"
  // useState returns 2 things
  // 1. The current state of the state variable, can set an initial state
  // 2. The set function that lets you change state variable to a different value. 

  const [products, setProducts] = useState(productsData)
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    description: ''
  })

  const [cart, setCart] = useState([]);

  const handleChange = (e) => {

    console.log(e.target.value)
    setNewProduct({
      ...newProduct, 
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit =(e) => {
    e.preventDefault()
    setProducts([newProduct, ...products])
  }

  const removeFromCart =(id) => {
    console.log('removed')
    cart.filter(id)
  }

  const addToCart = (product) => {
    console.log("this is added to cart", product)
    setCart([product, ...cart])
  }

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' value={newProduct.name} onChange={handleChange} id='name' name='name' />
        <br />
        <label htmlFor='price'>Price</label>
        <input type='number' value={newProduct.price} onChange={handleChange} id='price' name='price' />
        <br />
        <label htmlFor='description'>Description</label>
        <textarea value={newProduct.description} onChange={handleChange} id='description' name='description' />
        <input type='submit' />
      </form>

      <Preview newProduct={newProduct} />

      <div className="products">
        <h3>Please Purchace Our Excellent Products</h3>
        <ul>
          {
            products.map((product, i) => <Product key={i} product={product} addToCart={addToCart} />)
          }
        </ul>
      </div>

      <div className="cart">
          <h3>Shopping Cart</h3>
          <ul>
          {
            cart.map((product, i) => <CartItem key={i} product={product} removeFromCart = {removeFromCart} id={i}/>)
          }
          </ul>
      </div>

    </div>
  );
}

export default App;
