import React, { useEffect, useState } from 'react';

const AllReviewCard = ({ review }) => {
    const { _id, productName, customer, rating, message, service } = review;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/cakeDetails/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
            .catch(err => console.error(err))
    }, [service])

    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row rounder shadow-2xl">
                {reviewService?.img &&
                    <img src={reviewService.img} alt="" className="mask mask-squircle w-32 h-32 shadow-2xl" />
                }
                <div>
                    <h1 className="text-3xl font-semibold">{productName}</h1>
                    <h3 className=" text-2xl ">Name: {customer}</h3>
                    <p >Review: {message}</p>
                    <p className='text-xl font' >Rating: <span className='text-purple-700'>{rating}</span></p>

                </div>
            </div>
        </div>
    );
};

export default AllReviewCard;