import React, { useState } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import data from '../data/logements.json';
import Slideshow from '../components/Slideshow';
import bannerImg from "../assets/banner-bg.png";
import { useAppContext } from '../AppContext';

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const {showSlideshow, setShowSlideshow} = useAppContext();

  const handleCardClick = (property) => {
    setSelectedProperty(property);
    setShowSlideshow(true);
  };

  return (
    <div>
      <Banner imageSrc={bannerImg} title="Chez vous, partout et ailleurs" />
      {!showSlideshow && (
        <div className="cards-list">
        {data.map((property) => (
          <Card
            key={property.id}
            imageSrc={property.cover}
            title={property.title}
            onClick={() => handleCardClick(property)}
          />
        ))}
      </div>
      )}
      {showSlideshow && selectedProperty && <Slideshow property={selectedProperty} />}
    </div>
  );
}
