import React from 'react';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  // Générer un tableau de 5 éléments, où chaque élément est soit rempli soit vide selon le rating
  const stars = Array.from({ length: totalStars }, (_, index) => {
    return index < rating ? '#FF6060' : '#E3E3E3';
  });

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="196" height="36" viewBox="0 0 196 36" fill="none">
      {stars.map((color, index) => (
        <path key={index} d={`M${19.7212 + 40 * index} 6.84366C${19.4728 + 40 * index} 6.32809 ${18.9479 + 40 * index} 6 ${18.3714 + 40 * index} 6C${17.7949 + 40 * index} 6 ${17.2747 + 40 * index} 6.32809 ${17.0216 + 40 * index} 6.84366L${14.0079 + 40 * index} 13.0445L${7.27748 + 40 * index} 14.0382C${6.71506 + 40 * index} 14.1225 ${6.24636 + 40 * index} 14.5162 ${6.07295 + 40 * index} 15.0552C${5.89953 + 40 * index} 15.5942 ${6.04014 + 40 * index} 16.1895 ${6.44321 + 40 * index} 16.5879L${11.327 + 40 * index} 21.4201L${10.174 + 40 * index} 28.2491C${10.0803 + 40 * index} 28.8115 ${10.3146 + 40 * index} 29.3833 ${10.7786 + 40 * index} 29.7161C${11.2426 + 40 * index} 30.0489 ${11.8566 + 40 * index} 30.0911 ${12.3628 + 40 * index} 29.8239L${18.3761 + 40 * index} 26.6133L${24.3894 + 40 * index} 29.8239C${24.8956 + 40 * index} 30.0911 ${25.5096 + 40 * index} 30.0536 ${25.9736 + 40 * index} 29.7161C${26.4376 + 40 * index} 29.3786 ${26.6719 + 40 * index} 28.8115 ${26.5782 + 40 * index} 28.2491L${25.4205 + 40 * index} 21.4201L${30.3043 + 40 * index} 16.5879C${30.7073 + 40 * index} 16.1895 ${30.8526 + 40 * index} 15.5942 ${30.6745 + 40 * index} 15.0552C${30.4964 + 40 * index} 14.5162 ${30.0324 + 40 * index} 14.1225 ${29.47 + 40 * index} 14.0382L${22.7349 + 40 * index} 13.0445L${19.7212 + 40 * index} 6.84366Z`} fill={color} />
      ))}
    </svg>
  );
};

export default StarRating;