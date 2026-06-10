import React from 'react';
import UndrawBooks from '../assets/Undraw_Books.svg';
import ImageWithSkeleton from './ui/ImageWithSkeleton';

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Your favorite library platform</h1>
                        <h2>Find your dream <span className="purple">book.</span></h2>
                        <a href="#features">
                            <button className="btn">Browse Books</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <ImageWithSkeleton src={UndrawBooks} alt="Books illustration" className="header__img" />
                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing; 