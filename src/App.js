
import './index.css';
import { useState } from 'react';
import Nav from './COMPONENTS/Nav.jsx'; 
import Home from './PAGES/Home.jsx';
import Footer from './COMPONENTS/Footer.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './PAGES/Books.jsx';
import BookInfo from './PAGES/BookInfo.jsx';
import Cart from './PAGES/Cart.jsx';
import { books } from './data.js';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    const existingItem = cartItems.find(item => item.id === book.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...book, quantity: 1 }]);
    }
  };

  const removeFromCart = (bookId) => {
    setCartItems(cartItems.filter(item => item.id !== bookId));
  };

  const updateQuantity = (bookId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(bookId);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === bookId ? { ...item, quantity } : item
      ));
    }
  };

  return (
    <Router>
      <div className="App"> 
        <Nav cartCount={cartItems.length} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact component={Books} />
          <Route path="/books/:id" render={() => (<BookInfo books={books} addToCart={addToCart} />)}/>
          <Route path="/cart" render={() => (<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />)}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
