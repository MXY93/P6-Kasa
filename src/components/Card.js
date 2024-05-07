import '../styles/Card.scss';

export default function Card({ imageSrc, title }) {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}
