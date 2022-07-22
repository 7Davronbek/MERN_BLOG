import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-3">
                        <h1 className='h1'><Link to='/'>This day</Link></h1>
                    </div>
                    <div className="col-6 ms-auto">
                        <div className="ulWrap">
                            <Link to='/'>Home</Link>
                            <Link to='/blogs'>Blogs</Link>
                            <Link to='/write'>Write</Link>
                            <Link to='/register'>Register</Link>
                            <Link to='/login'>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar