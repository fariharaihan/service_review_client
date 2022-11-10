import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";


const CheckOutReview = () => {
    const { _id, title, img, price, description, rating } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const rating = form.rating.value;
        const message = form.message.value;

        const review = {
            service: _id,
            productName: title,
            customer: name,
            email,
            rating,
            message
        }

        fetch('https://b6a11-service-review-server-side-phi.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Successfully done')
                    form.reset()
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='mx-5'>
            <div className='py-5 text-center'>
                <h2 className='text-5xl '>{title}</h2>
                <div className='text-center my-10'>
                    <img src={img} alt="" />
                </div>
                <p>{description}</p>
                <h4 className='text-3xl font-semibold text-purple-600'>Price: ${price}</h4>
                <p>rating: {rating}</p>
            </div>
            <div className='my-10 '>
                <form onSubmit={handlePlaceReview} >
                    <div className='mb-4'>
                        {user?.photoURL
                            ?
                            <img className='w-16 rounded-full dark:bg-gray-500'
                                src={user?.photoURL
                                }></img>
                            : <FaUserCircle className='w-12 h-12'></FaUserCircle>
                        }
                    </div>
                    <div className='grid grid-cols-1 w-3/4' >
                        <p className='font-semibold'>
                            Name:  <input name='name' type="text" placeholder="Name" className="input input-bordered mb-4 w-3/4" />
                        </p>
                        <p className='font-semibold'>
                            Email: <input name='email' type="text" placeholder="email" defaultValue={user?.email} className="input input-bordered mb-4 w-3/4" readOnly />
                            <p>
                                rating: <input name='rating' type="text" placeholder="rating" className="input input-bordered mb-4 w-3/4" />
                            </p>
                        </p>
                        <div className='flex align-center font-semibold'>
                            <p>Your review: </p>
                            <textarea name='message' className="textarea textarea-primary w-3/4" placeholder="Write your review" required></textarea>
                            <div className="card-actions justify-end mt-5"></div>
                        </div>
                        <div className="card-actions justify-end mt-5">
                            <button className='btn'>Place your review</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOutReview;