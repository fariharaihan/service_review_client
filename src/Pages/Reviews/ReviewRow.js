import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handleDelete, handleUpdate }) => {
    const { _id, productName, email, customer, rating,
        message, service, status } = review;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/cakeDetails/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
            .catch(err => console.error(err))
    }, [service])

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            {
                                reviewService?.img &&
                                <img src={reviewService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{productName}</div>
                    </div>
                </div>
            </td>
            <td>
                {customer}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{rating}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
            </th>

            {/* <th>
                <button className="btn btn-ghost btn-xs">{status ? status : "Edit"}</button>
            </th> */}
            <th>
                <button>
                    <label htmlFor="my-modal" className="btn">Edit</label>
                </button>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">You can change your previous review</h3>
                        {/* <p className="py-4">{message}</p> */}
                        <input type="text" placeholder="Edit your review" className="input input-bordered mb-4 w-full" />
                        <div className="modal-action">
                            <button onClick={() => handleUpdate(_id)} >
                                <label htmlFor="my-modal" className='btn'>{status ? status : "Update"}</label>
                            </button>
                        </div>
                    </div>
                </div>
            </th>
        </tr>


    );
};

export default ReviewRow;