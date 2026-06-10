import React from 'react'
import Book from './ui/Book'
import { books } from '../data.js'

export default function Featured() {
  const featuredBooks = books.filter((book) => book.rating === 5).slice(0, 4)

  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">books</span>
          </h2>
          <div className="books">
            {featuredBooks.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
