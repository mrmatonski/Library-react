import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import ImageWithSkeleton from './ImageWithSkeleton'

export default function Book({ book }) {
  if (!book) return null

  const { id, title, url, originalPrice, salePrice, rating } = book
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const bookLink = `/books/${id}`
  const starIcons = []

  for (let i = 0; i < fullStars; i += 1) {
    starIcons.push(faStar)
  }

  if (hasHalfStar) {
    starIcons.push(faStarHalfAlt)
  }

  return (
    <div className="book">
      <Link to={bookLink}>
        <figure className="book__img--wrapper">
          <ImageWithSkeleton src={url} alt={title} className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={bookLink} className="book__title--link">
          {title}
        </Link>
      </div>
      <div className="book__ratings">
        {starIcons.map((icon, index) => (
          <FontAwesomeIcon key={index} icon={icon} />
        ))}
      </div>
      <div className="book__price">
        {salePrice != null ? (
          <>
            <span className="book__price--normal">${originalPrice.toFixed(2)}</span>
            ${salePrice.toFixed(2)}
          </>
        ) : (
          `$${originalPrice.toFixed(2)}`
        )}
      </div>
    </div>
  )
}
