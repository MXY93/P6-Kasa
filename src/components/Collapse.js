import React, { useState } from 'react';
import '../styles/Collapse.scss';
import Arrow from '../assets/arrow-logo.png';


function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse-button">
            <button className="collapse-title" onClick={toggleCollapse}>
                {title}
                <span className={`arrow ${isOpen ? 'open' : 'closed'}`}><img src={Arrow} alt='arrow logo'></img></span>
            </button>
            {isOpen && (
                <div className="collapse-content">
                    {children}
                </div>
            )}
        </div>
    );
}

export default Collapse;
