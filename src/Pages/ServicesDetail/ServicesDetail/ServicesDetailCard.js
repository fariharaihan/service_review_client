import React from 'react';

const ServicesDetailCard = ({ service }) => {
    const { title, img, price, description, rating } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>

                <p className='text-3xl text-purple-700 font-semibold'>Price: ${price}</p>
                <p className='text-lg'>Rating:  <span className='text-purple-700'>{rating}</span></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};



export default ServicesDetailCard;