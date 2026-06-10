import React, { useState } from 'react'

export default function ImageWithSkeleton({ src, alt, className = '', wrapperClassName = '', style, ...props }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`image-skeleton__wrapper ${wrapperClassName}`.trim()}>
      {!loaded && <div className="image-skeleton__placeholder" />}
      {!loaded && (
        <div className="image-skeleton__spinner" aria-hidden="true">
          <span />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} image-skeleton__img ${loaded ? 'loaded' : 'loading'}`.trim()}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 240ms ease-in-out', ...style }}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        {...props}
      />
    </div>
  )
}
