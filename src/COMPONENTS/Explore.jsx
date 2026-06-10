import React from 'react'
import { Link } from 'react-router-dom'

export default function Explore() {
  return (
    <section id="explore">
        <div className="container">
            <div className="row row__column">
                <h2>
                    Explore more <span className="purple">books</span>
                    <Link to="/books">
                    <button className="btn">Explore books</button>
                    </Link>
                </h2>
            </div>
        </div>
    </section>
  )
}
