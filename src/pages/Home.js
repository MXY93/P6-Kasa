import Banner from '../components/Banner';
import Card from '../components/Card';
import data from '../data/logements.json';

export default function Home() {
  return (
    <div>
      <Banner imageSrc="/images/banner.jpg" title="Bienvenue chez Kasa!" />
      <div className="cards-list">
        {data.map((property) => (
          <Card
            key={property.id}
            imageSrc={property.cover}
            title={property.title}
          />
        ))}
      </div>
    </div>
  );
}
