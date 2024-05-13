import '../styles/Card.scss';

export default function Card({ imageSrc, title, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}
