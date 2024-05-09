import Banner from '../components/Banner';
import Card from '../components/Card';
import data from '../data/logements.json';
import bannerImg from "../assets/banner-bg.png";

export default function Home() {
  return (
    <div>
      <Banner imageSrc={bannerImg} title="Chez vous, partout et ailleurs" />
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
