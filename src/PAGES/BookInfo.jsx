import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import ImageWithSkeleton from '../COMPONENTS/ui/ImageWithSkeleton'

export default function BookInfo({ books, addToCart }) {
  const { id } = useParams()
  const history = useHistory()
  const [isAdded, setIsAdded] = useState(false)
  const book = books.find(b => b.id === parseInt(id))

  if (!book) {
    return <div>Book not found</div>
  }

  const fullStars = Math.floor(book.rating)
  const hasHalfStar = book.rating % 1 !== 0

  return (
    <div id="books__body">
        <main id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <Link to="/books" className="book__link">
                        <FontAwesomeIcon icon="arrow-left" />
                        </Link>

                        <Link to="/books" className="book__link">
                        <h2 className="book__selected--title--top">Books</h2>
                        </Link>
                    </div>
                    <div className="book__selected">
                        <figure className="book__selected--figure">
                            <ImageWithSkeleton src={book.url} alt={book.title} className="book__selected--img" wrapperClassName="book__selected--img-wrapper" />
                        </figure>
                        <div className="book__selected--description">
                            <h2 className="book__selected--title">{book.title}</h2>
                            <div className="book__ratings">
                              {[...Array(fullStars)].map((_, i) => (
                                <FontAwesomeIcon key={i} icon="star" />
                              ))}
                              {hasHalfStar && <FontAwesomeIcon icon="star-half-alt" />}
                            </div>
                            <p className="book__description">{book.description}</p>
                            <div className="book__price">
                              {book.salePrice ? (
                                <>
                                  <span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>
                                  ${book.salePrice.toFixed(2)}
                                </>
                              ) : (
                                `$${book.originalPrice.toFixed(2)}`
                              )}
                            </div>
                            <button 
                              className="btn" 
                              onClick={() => {
                                if (isAdded) {
                                  history.push('/cart')
                                } else {
                                  addToCart(book)
                                  setIsAdded(true)
                                }
                              }}
                            >
                              {isAdded ? 'View Cart' : 'Add to Cart'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}
