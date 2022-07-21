import React from 'react'
import { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

import { send } from '../redux/actions/authAction';

const Login = (props) => {
    const dispatch = useDispatch()

    console.log(props);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()
    }

    return (
        <div className='Login Register'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 onClick={() => dispatch(send())} className="h1 text-center">Login</h1>

                        <form onSubmit={handleLogin}>
                            {error && <h6>Something went wrong! Try again!</h6>}

                            {/* <label htmlFor="Username">Username</label>
                            <input
                                type="text"
                                id='Username'
                                className="form-control"
                                onChange={e => setUsername(e.target.value)}
                            /> */}

                            <label htmlFor="Email">Email</label>
                            <input
                                type="email"
                                id='Email'
                                className="form-control"
                                onChange={e => setEmail(e.target.value)}
                            />

                            <label htmlFor="Password">Password</label>
                            <input
                                type="password"
                                id='Password'
                                className="form-control"
                                onChange={e => setPassword(e.target.value)}
                            />

                            <button type="submit" className='btn'>Login</button>
                            <Link to='/register'>Don't have an account?</Link>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export const mapStateToProps = state => {
    console.log(state)
    return {
        error: state.auth.error,    
    }
}

export default connect(mapStateToProps, { send })(Login)