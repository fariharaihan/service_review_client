import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ServicesDetailCard from '../ServicesDetail/ServicesDetail/ServicesDetailCard';

const CheckOutReview = () => {
    const { _id, title, img, price, description, rating } = useLoaderData()
    const { user } = useContext(AuthContext)

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
            message
        }
    }

    return (
        <div>
            <div className='py-5 text-center'>
                <h2 className='text-5xl '>{title}</h2>
                <div className='text-center my-10'>
                    <img src={img} alt="" />
                </div>
                <p>{description}</p>
                <h4 className='text-3xl font-semibold text-purple-600'>Price: ${price}</h4>
                <p>rating: {rating}</p>
            </div>
            <div className='my-10'>
                <form onSubmit={handlePlaceReview} >
                    <div className='mb-4'>
                        {user?.photoURL
                            ?
                            <img className='w-16 rounded-full dark:bg-gray-500'
                                src={user?.photoURL
                                }></img>
                            : <></>
                        }
                    </div>
                    <div className='grid grid-cols-1 w-3/4' >
                        <input name='name' type="text" placeholder="Name" className="input input-bordered mb-4 " />
                        <input name='email' type="text" placeholder="email" defaultValue={user?.email} className="input input-bordered mb-4" readOnly />
                        <input name='rating' type="text" placeholder="rating" className="input input-bordered mb-4" />
                        <textarea name='message' className="textarea textarea-primary" placeholder="Write your review"></textarea>
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