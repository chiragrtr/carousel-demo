import './carousel.css';
import React, { useState, useEffect } from 'react';

const IMAGE_WIDTH_PERCENTAGE = 37;

const Carousel = ({ images }) => {
    const [position, setPosition] = useState(0);
    const [currentImage, setCurrentImage] = useState(1);

    useEffect(() => {
        setPosition(0);
        setCurrentImage(1);
    }, [images]);

    const moveRight = () => {
        setCurrentImage(currentImage + 1);
        setPosition(position - IMAGE_WIDTH_PERCENTAGE);
    };

    const moveLeft = () => {
        setCurrentImage(currentImage - 1);
        setPosition(position + IMAGE_WIDTH_PERCENTAGE);
    };

    const isLeftArrowDisabled = currentImage === 0;
    const isRightArrowDisabled = currentImage === images.length - 1;

    return (
        <div className='carousel-container'>
            <div className='carousel'>
                <span className={`left-arrow ${isLeftArrowDisabled ? 'inactive' : ''}`} onClick={isLeftArrowDisabled ? null : moveLeft} />
                <div className='carousel-images' style={{ transform: `translate(${position}%, 0px)` }} >
                    {images.map(({ path, text }, i) => (
                        <div className='image-container' key={i}>
                            <img className={`carousel-image ${currentImage === i ? 'current' : ''}`} src={path} alt={text} />
                        </div>
                    ))}
                </div>
                <span className={`right-arrow ${isRightArrowDisabled ? 'inactive' : ''}`} onClick={isRightArrowDisabled ? null : moveRight} />
            </div>
            <div className='details'>
                <div>
                    <div>{`Currency: ${images[currentImage].text}`}</div>
                    <div>{`Price: ${images[currentImage].price} INR`}</div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;