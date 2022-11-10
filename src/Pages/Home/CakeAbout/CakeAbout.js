import React from 'react';

const CakeAbout = () => {

    return (
        <div className="hero border rounded-xl shadow-lg mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse mx-8">
                <img src="https://www.elegantweddinginvites.com/wedding-blog/wp-content/uploads/2020/09/wedding-cakes-ideas-for-2021-wedding.jpg" className="w-1/3 h-64 rounded-lg shadow-2xl" />
                <div className='mx-10'>
                    <h1 className="text-4xl font-bold">About Our Cake</h1>
                    <p className="py-6">Our cake is so testy. Our cakes are also looking delicious. Its designs are gorgeous. You can customize your cake design. </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default CakeAbout;