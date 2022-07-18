import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-3">
                        <h1><Link to='/'>Blog's</Link></h1>
                    </div>
                    <div className="col-6 ms-auto">
                        <div className="ulWrap">
                            <a href="/">Home</a>
                            <a href="/">Blogs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar