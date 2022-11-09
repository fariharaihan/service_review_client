import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState({})


    const url =

        useEffect(() => {
            fetch(`http://localhost:5000/reviews?email=${user.email}`)
                .then(res => res.json())
                .then(data => setReviews(data))
        }, [user?.email])
    return (
        <div>
            <h2 className='text-5xl'>You have : {reviews.length} reviews.</h2>
        </div>
    );
};

export default Reviews;