import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AddServices = () => {
    const { _id } = useLoaderData

    const handlePlaceService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const detail = form.detail.value;

        const services = {
            service: _id,
            title: name,
            image,
            rating,
            detail,
            price
        }

        fetch('http://localhost:5000/services', {
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
                <p></p>
                <p>
                    Product/ cake name: <input name='name' type="text" placeholder="Product name" className="input input-bordered w-2/3 mb-3" />
                </p>
                <p>
                    Image: <input name='image' type="text" placeholder="Image" className="input input-bordered w-2/3 mb-3" />
                </p>
                <div className='flex align-center'>
                    <p>Cake detail:</p>
                    <textarea name='detail' className="textarea textarea-bordered mb-3 w-2/3" placeholder="Detail"></textarea>

                </div>
                <p>
                    Price: <input name='price' type="text" placeholder="Price" className="input input-bordered w-2/3 mb-3" />
                </p>
                <p>
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