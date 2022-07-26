import axios from 'axios';
import React from 'react'
import { useRef } from 'react'
import { connect, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { USER } from '../tools/contstants'

import { login, updateState } from '../redux/actions/authAction';

const Login = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userRef = useRef()
    const passwordRef = useRef()

    const handleLogin = async (e) => {
        dispatch(updateState({ error: false, isLoading: true }))
        e.preventDefault()

        try {
            const res = await axios.post('/auth/login', { username: userRef.current.value, password: passwordRef.current.value })
            dispatch(updateState({ user: res.data, isLoading: false }))
            localStorage.setItem(USER, JSON.stringify(res.data))
            navigate('/', { replace: true })
        } catch (err) {
            dispatch(updateState({ error: true, isLoading: false }))
        }
    }

    return (
        <div className='Login Register'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1
                            // onClick={() => dispatch(send())}
                            className="h1 text-center">Login</h1>

                        <form onSubmit={handleLogin}>
                            {props.error && <h6>Something went wrong! Try again!</h6>}

                            <label htmlFor="Username">Username</label>
                            <input
                                type="text"
                                id='Username'
                                className="form-control"
                                ref={userRef}
                            />

                            <label htmlFor="Password">Password</label>
                            <input
                                type="password"
                                id='Password'
                                className="form-control"
                                ref={passwordRef}
                            />

                            <button disabled={props.isLoading} type="submit" className='btn'>Login {props.isLoading && <span style={{ color: "#000" }} className='spinner-border-sm spinner-border'></span>}</button>
                            <Link to='/register'>Don't have an account?</Link>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        isLoading: state.auth.isLoading,
        user: state.auth.user,
    }
}

export default connect(mapStateToProps, { login })(Login)