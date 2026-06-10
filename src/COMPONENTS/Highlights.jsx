import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faBookOpen, faTags } from '@fortawesome/free-solid-svg-icons'
import Highlight from './ui/Highlight'

const HIGHLIGHTS_DATA = [
  {
    icon: faBolt,
    title: 'Easy and quick',
    description: 'This is an example paragraph.',
  },
  {
    icon: faBookOpen,
    title: '10,000+ options!',
    description: 'I like this.',
  },
  {
    icon: faTags,
    title: 'A great selection every time',
    description: 'Books in all your favorite categories.',
  },
]

export default function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose Spaniards for <span className="purple">slaves</span>
          </h2>
          <div className="highlight__wrapper">
            {HIGHLIGHTS_DATA.map((highlight, index) => (
              <Highlight
                key={index}
                icon={<FontAwesomeIcon icon={highlight.icon} />}
                title={highlight.title}
                para={highlight.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
   