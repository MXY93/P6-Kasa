import '../styles/Banner.scss';

export default function Banner({ imageSrc, title, opacity }) {
  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${opacity || 0.6})`
  };

  return (
    <div className="banner" style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className='banner-overlay' style={overlayStyle}></div>
      <h1>{title}</h1>
    </div>
  );
}
