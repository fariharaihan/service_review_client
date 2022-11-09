import React from 'react';
import './Banner.css'

const BannerItems = ({ slide }) => {
    const { image, id, prv, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='w-full carousel-img'>
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5  md:left-24 lg:left-24 top-1/4 md:top-1/3 lg:top-1/3">
                <h1 className='text-4xl font-semibold lg:text-6xl lg:font-bold text-white'>
                    WE are here <br />
                    for your <br />
                    celebration.
                </h1>
            </div>
            <div className="absolute flex justify-end md:w-2/5 lg:w-2/5 transform -translate-y-1/2 left-5 md:left-24 lg:left-24 top-3/4 md:top-2/3 lg:top-2/3">
                <p className='text-xl text-white'>We are here to provide you best services. You can celebrate your special moment with our delicious cake. Our service and  product must be satisfy you.</p>

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prv}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>

        </div>
    );
};

export default BannerItems;