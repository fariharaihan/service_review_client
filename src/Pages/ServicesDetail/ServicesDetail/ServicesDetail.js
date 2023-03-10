import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';
import AllReview from './AllReview';

const ServicesDetail = () => {
    const { loading } = useContext(AuthContext)
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-phi.vercel.app/cakeDetails')
            .then(res => res.json())
            .then(data => setServices(data))
    })

    if (loading) {
        return <div className='flex justify-center'>
            <div className="w-16 h-16 border-4 rounded-full border-dashed animate-spin border-violet-900"></div>
        </div>
    }

    return (
        <div className='my-20'>
            <div className='text-center my-10'>
                <p className='text-2xl font-bold text-purple-700 '>Our Services</p>
                <h2 className='text-4xl font-sembold '>Our Cake and baking Items</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div>
                <AllReview></AllReview>
            </div>
            <div className="card-actions justify-center mt-5">
                <Link to=''><button className='btn'>Add your review</button></Link>
            </div>
        </div>
    );
};


export default ServicesDetail;