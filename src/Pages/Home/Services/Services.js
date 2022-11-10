import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-phi.vercel.app/cakes')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div className='my-10' >
            <div className='text-center my-10 '>
                <p className='text-2xl font-bold text-purple-700 '>Our Services</p>
                <h2 className='text-4xl font-sembold '>Our Cake and baking Items</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className="card-actions justify-center mt-10">
                <Link to='/servicesdetail'><button className='btn'>See Our All Products</button></Link>
            </div>
        </div>
    );
};

export default Services;