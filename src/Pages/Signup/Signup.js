import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='flex justify-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-900"></div>
        </div>
    }

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="hero w-full my-10">
            <div className="hero-content  grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left mx-10">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">Please sign Up to visit our website and place you order. <br /> You also give us your valuable review.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>

                    </form>
                    <p className='text-center'>Already have an account: <Link className='text-purple-700 text-bold' to='/login'>Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;