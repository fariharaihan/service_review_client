import React from 'react';
import bakingImg from '../../assets/about-us/img-2.jpg'
import bakingImg2 from '../../assets/about-us/img-3.webp'

const About = () => {
    return (
        <div className="hero my-24">
            <div className="hero-content flex-col md:flex-row lg:flex-row ">
                <div className='relative w-1/2'>
                    <img src={bakingImg2} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={bakingImg} alt="" className="absolute w-3/5 right-5 top-1/2 border-5 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;