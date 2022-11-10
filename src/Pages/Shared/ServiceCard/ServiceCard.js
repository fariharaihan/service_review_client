import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price, description } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-64 w-64' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                    {

                        description.length > 100 ?
                            <p>{description.slice(0, 100) + '....'}</p>
                            :
                            <p>{description}</p>
                    }
                </p>
                <p className='text-2xl text-purple-700 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkoutreview/${_id}`}>
                        <button className='btn'>View Detail</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;