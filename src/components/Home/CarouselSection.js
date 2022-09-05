import React, { useState } from 'react';
//bootstrap components
import Carousel from 'react-bootstrap/Carousel';
//json data 
import carousel_data from '../../json/carousel_data.json'
//link
import { Link } from 'react-router-dom'
//animation framer motion
import { motion } from 'framer-motion'
const devInfoParentVariant = {
    hidden: {
        x: '-100vw'
    },
    visiable: {
        x: 0,
        transition: {
            type: 'spring',
            delay: 1,
            stiffness: 120,
            when: "beforeChildren"
        }
    }
}
const devInfoBtnChiledVariant = {
    hidden: {
        opacity: 0
    },
    visiable: {
        opacity: 1,
        transition: {
            duration: 3,
        }
    }
}
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
                        <div className="d-flex justify-content-around align-items-center flex-row flex-wrap w-100 h-100 my-5 px-5">
                            <motion.div className="info"
                                variants={devInfoParentVariant}
                                initial="hidden"
                                animate="visiable"
                            >
                                <h3>{carousel.tag}</h3>
                                <h1 className="main-color">{carousel.title}</h1>
                                <p>{carousel.description}</p>
                                <Link to='/products' className='text-decoration-none'>
                                    <motion.button className='main-btn'
                                        variants={devInfoBtnChiledVariant}
                                        initial="hidden"
                                        animate="visiable"
                                    >
                                        Discover Now
                                    </motion.button>
                                </Link>
                            </motion.div>
                            <motion.img
                                src={carousel.img}
                                alt={carousel.title}
                                className="h-50 w-50"
                                style={{ objectFit: 'contain' }}
                                initial={{ y: '-100vh' }}
                                animate={{ y: 0 }}
                                transition={{ type: 'spring', duration: 1, stiffness: 120 }}
                            />
                        </div>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}

export default CarouselSection;