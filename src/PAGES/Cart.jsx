import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithSkeleton from '../COMPONENTS/ui/ImageWithSkeleton'

export default function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = item.salePrice || item.originalPrice
      return total + price * item.quantity
    }, 0)
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <h1 className="cart__header">Shopping Cart</h1>
            {cartItems.length === 0 ? (
              <div className="cart__empty">
                <p>Your cart is empty</p>
                <Link to="/books">
                  <button className="btn">Continue Shopping</button>
                </Link>
              </div>
            ) : (
              <>
                <div className="cart__items">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart__item">
                      <div className="cart__book">
                        <ImageWithSkeleton src={item.url} alt={item.title} className="cart__book--img" wrapperClassName="cart__book--img-wrapper" />
                        <div className="cart__book--info">
                          <h2 className="cart__book--title">{item.title}</h2>
                          <p className="cart__book--price">
                            ${(item.salePrice || item.originalPrice).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          className="cart__input"
                        />
                      </div>
                      <button
                        className="cart__book--remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart__total">
                  <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
                  <button className="btn">Proceed to Checkout</button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
