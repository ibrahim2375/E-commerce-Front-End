import React, { useState } from 'react';
//bootstrap components
import Carousel from 'react-bootstrap/Carousel';
//json data 
import carousel_data from '../../json/carousel_data.json'
function CarouselSection() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="w-100">
            {
                carousel_data.map((carousel, index) => (
                    <Carousel.Item key={carousel.id} className="vh-100 w-100" style={{ backgroundColor: carousel.bg }}>
                        <div className="d-flex justify-content-around align-items-center flex-row flex-wrap w-100 h-100 my-5">
                            <div className="info">
                                <h3>{carousel.tag}</h3>
                                <h1 className="main-color">{carousel.title}</h1>
                                <p>{carousel.description}</p>
                                <button className='main-btn'>Discover Now</button>
                            </div>
                            <img
                                src={carousel.img}
                                alt={carousel.title}
                                className="h-50 w-50"
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}

export default CarouselSection;