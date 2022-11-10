import React, { useEffect, useState } from 'react';
import AllReviewCard from './AllReviewCard';

const AllReview = () => {
    const [allReview, setAllReview] = useState([]);

    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-phi.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setAllReview(data))
    })
    return (
        <div>
            <div className='text-center my-10'>
                <p className='text-2xl font-bold text-purple-700 '>Customer Reviews</p>
                <h2 className='text-4xl font-sembold '>Thanks for your valuable review</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    allReview.map(review => <AllReviewCard
                        key={review._id}
                        review={review}
                    ></AllReviewCard>)
                }
            </div>
        </div>
    );
};

export default AllReview;