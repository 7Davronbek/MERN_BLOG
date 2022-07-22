import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const handleRegister = async (e) => {
        setError(false)
        e.preventDefault()

        try {
            const res = await axios.post('/auth/register', { username, email, password })
            res.data && navigate("/login", { replace: true })

        } catch (err) {
            setError(true)
        }

    }

    return (
        <div className='Register'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="h1 text-center" >Register</h1>

                        <form onSubmit={handleRegister}>
                            {error && <h6>Something went wrong! Try again!</h6>}
                            <label htmlFor="Username">Username</label>
                            <input
                                type="text"
                                id='Username'
                                className="form-control"
                                onChange={e => setUsername(e.target.value)}
                            />

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

                            <button type="submit" className='btn'>Register</button>
                            <Link to='/login'>Already have an account?</Link>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register