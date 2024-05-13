import Banner from '../components/Banner';
import bannerImg from "../assets/about-banner.png";
import Collapse from '../components/Collapse';

export default function About() {
    return (<div>
        <Banner imageSrc={bannerImg} opacity="0.3"/>
        <div className='collapse-container'>
            <Collapse title="Fiabilité"/>
            <Collapse title="Respect"/>
            <Collapse title="Service"/>
            <Collapse title="Sécurité"/> 
        </div>
    </div>
    );
}