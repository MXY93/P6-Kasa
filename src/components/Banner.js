import '../styles/Banner.scss';

export default function Banner({ imageSrc, title }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className='banner-overlay'></div>
      <h1>{title}</h1>
    </div>
  );
}
