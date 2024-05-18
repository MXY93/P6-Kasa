import React, { useEffect, useState } from 'react';
import '../styles/Slideshow.scss';
import Collapse from '../components/Collapse';
import StarRating from './StarRating';
import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';


function Slideshow({ property }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { pictures, title, host, location, tags, rating, description, equipments } = property;

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="slideshow">
            <div className="carousel-container">
                <img className="carousel-picture" src={pictures[currentIndex]} alt="Slideshow" />
                {pictures.length > 1 && (
                    <>
                        <img src={leftArrow} onClick={goToPrevious} className="left-arrow" alt="left-arrow" />
                        <img src={rightArrow} onClick={goToNext} className="right-arrow" alt="right-arrow" />
                        <div className="numeration">
                            {currentIndex + 1} / {pictures.length}
                        </div>
                    </>
                )}
            </div>
            <div className="carousel-description">
                <div className="carousel-description--infos-part">
                    <div className="title-and-location-and-tags">
                        <h2>{title}</h2>
                        <p>{location}</p>
                        <div className='tags-container'>
                            <ul className='tags-list'>{tags.map(tag => (<li className='tags-list-tag' key={tag}>{tag}</li>))}</ul>
                        </div>
                    </div>
                    <div className="host-infos-and-ratings">
                        <div className="host-infos">
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
                        <div className="ratings">
                            <StarRating rating={rating}/>
                        </div>
                    </div>
                </div>
                <div className='collapse-container'>
                    <Collapse title="Description" children={description}/>
                    <Collapse title="Équipements" children={
                        <ul className='equipments-list'>{equipments.map(equipment => (<li className='equipments-list-equipment' key={equipment}>{equipment}</li>))}</ul>
                    }/>
                </div>
            </div>
        </div>
    );
}

export default Slideshow;