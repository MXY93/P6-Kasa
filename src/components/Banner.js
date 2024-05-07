import '../styles/Banner.scss';

export default function Banner({ imageSrc, title }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageSrc})` }}>
      <h1>{title}</h1>
    </div>
  );
}
