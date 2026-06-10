import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function Rating({ rating }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="book__ratings">
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} />
      ))}
      {hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} />}
    </div>
  )
}
