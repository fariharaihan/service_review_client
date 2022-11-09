import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err));

    }
    return (
        <div className="hero w-full">
            <div className="hero-content  grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Please log in our website and place your order & <br />give us your review about our food.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                            <input className="btn btn-primary mt-5" value="login with Google" />

                        </div>


                    </form>
                    <p className='text-center'>New to candle cake: <Link className='text-purple-700 text-bold' to='/signup'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;