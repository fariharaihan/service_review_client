import React from 'react';
import bakingImg from '../../assets/about-us/img-2.jpg'
import bakingImg2 from '../../assets/about-us/img-3.webp'

const About = () => {
    return (
        <div className="hero pb-20">
            <div className="hero-content flex-col md:flex-row lg:flex-row ">
                <div className='relative w-1/2'>
                    <img src={bakingImg2} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={bakingImg} alt="" className="absolute w-3/5 right-5 top-1/2 border-5 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Candle Cake</h1>
                    <p className='text-purple-700 font-semibold'>Fariha Mahjabin</p>
                    <p className="py-6">We always provide our best service for our customers. Customers are always special for us. Our services and products are must be satisfy you. You can celebrate your special moment with our delicious cake. </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;