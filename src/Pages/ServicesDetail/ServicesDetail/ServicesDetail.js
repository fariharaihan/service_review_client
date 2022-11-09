import React, { useEffect, useState } from 'react';
import ServicesDetailCard from './ServicesDetailCard';

const ServicesDetail = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cakeDetails')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div className='my-20'>
            <div className='text-center my-10'>
                <p className='text-2xl font-bold text-purple-700 '>Our Services</p>
                <h2 className='text-4xl font-sembold '>Our Cake and baking Items</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServicesDetailCard
                        key={service._id}
                        service={service}
                    ></ServicesDetailCard>)
                }
            </div>
        </div>
    );
};


export default ServicesDetail;