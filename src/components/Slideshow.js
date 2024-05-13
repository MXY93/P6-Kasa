import React, { useState } from 'react';
import '../styles/Slideshow.scss';
import Collapse from '../components/Collapse';
import StarRating from './StarRating';

function Slideshow({ property }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { pictures, title, host, location, tags, ratings} = property;

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const HostName = ( { host }) => {
        const [firstName, lastName] = host.name.split(' ');
        return (
            <p className='hostName'>
                <span>{firstName}</span>
                <span>{lastName}</span>
            </p>
        );
    }

    return (
        <div className="slideshow">
            {pictures.length > 1 && (
                <>
                    <button onClick={goToPrevious} className="left-arrow">&lt;</button>
                    <button onClick={goToNext} className="right-arrow">&gt;</button>
                </>
            )}
            <img className="carousel-picture" src={pictures[currentIndex]} alt="Slideshow" />
            <div className="carousel-description">
                <div className="title-hostName-hostPicture">
                    <h2>{title}</h2>
                    <div className='hostName-hostPicture'>
                        <HostName host={host}/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                            <defs>
                                <pattern id="imgpattern" patternUnits="userSpaceOnUse" width="64" height="64">
                                <image href={host.picture} x="0" y="0" width="64" height="64" />
                                </pattern>
                            </defs>
                            <circle cx="32" cy="32" r="32" fill="url(#imgpattern)" />
                        </svg> 
                    </div>
                </div>
                <div>
                    <p>{location}</p>
                </div>
                <div className='tags-ratings'>
                    <ul className='tags-list'>{tags.map(tag => (<li key={tag}>{tag}</li>))}</ul>
                    <StarRating rating={ratings}/>
                </div>
                <div className='collapse-component'>
                    <Collapse title="Description"/>
                    <Collapse title="Équipements"/>
                </div>
                {pictures.length > 1 && (
                    <div className="numeration">
                        {currentIndex + 1} / {pictures.length}
                    </div>
                )} 
            </div>
            
        </div>
    );
}

export default Slideshow;

// {tags.map(tag => (<li>{tag}</li>))}
// <StarRating rating={rating}/>
// key={tag.id}
// <HostName host={host.name}/>

// <div className="carousel-description"></div>