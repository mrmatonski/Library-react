import React, { useState } from 'react'
import { books as booksData } from "../data.js"
import Book from "../COMPONENTS/ui/Book.jsx"

export default function Books({ books: initialBooks = booksData }) {
    const [sortedBooks, setSortedBooks] = useState(initialBooks)

    function filterBooks(filter) {
        let sorted = [...initialBooks]

        if (filter === 'Low_to_high') {
            sorted.sort((a, b) => (a.salePrice ?? a.originalPrice) - (b.salePrice ?? b.originalPrice))
        } else if (filter === 'High_to_low') {
            sorted.sort((a, b) => (b.salePrice ?? b.originalPrice) - (a.salePrice ?? a.originalPrice))
        } else if (filter === 'Rating') {
            sorted.sort((a, b) => b.rating - a.rating)
        }

        setSortedBooks(sorted)
    }
  return (
    <div id="books__body">
        <main id="books__main">
            <section>
                <div className="books__container">
                    <div className="row">
                        <div className="books__header">
                            <h2 className="section__title books__header--title">All Books</h2>
                            <select name="sort" id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                                <option value="DEFAULT" disabled>Sort</option>
                                <option value="Low_to_high">Price low to high</option>
                                <option value="High_to_low">Price high to low</option>
                                <option value="Rating">Filter by rating</option>
                            </select>
                        </div>

                    <div className="books">
                        {
                            sortedBooks.map(book => <Book book={book} key={book.id} />)

                        }
                    </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}
