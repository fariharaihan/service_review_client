import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AddServices = () => {
    const { _id } = useLoaderData

    const handlePlaceService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const services = {
            service: _id,
            title: title,
            img,
            rating,
            description,
            price
        }

        fetch('https://b6a11-service-review-server-side-phi.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Service added Successfully ')
                    form.reset()
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <form onSubmit={handlePlaceService} className="my-20">
            <div>
                <p className='text-4xl mb-7 font-semibold'>You can add your new services...</p>
                <p className='font-semibold'>
                    Product/ cake name: <input name='title' type="text" placeholder="Product name" className="input input-bordered w-2/3 mb-3" />
                </p>
                <p className='font-semibold'>
                    Image: <input name='img' type="text" placeholder="Image" className="input input-bordered w-2/3 mb-3" />
                </p>
                <div className='flex align-center font-semibold'>
                    <p>Cake detail:</p>
                    <textarea name='description' className="textarea textarea-bordered mb-3 w-2/3" placeholder="Detail"></textarea>

                </div>
                <p className='font-semibold'>
                    Price: <input name='price' type="text" placeholder="Price" className="input input-bordered w-2/3 mb-3" />
                </p>
                <p className='font-semibold'>
                    Rating: <input name='rating' type="text" placeholder="Rating" className="input input-bordered w-2/3 " />
                </p>
            </div>
            <div className="card-actions justify-end mt-5 w-3/4">
                <button className='btn'>Add your service</button>
            </div>
        </form>
    );
};

export default AddServices;