import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/actions/authAction'

const Navbar = (props) => {
    return (
        <div className='Navbar'>
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-3">
                        <h1 className='h1'><Link to='/'>This day</Link></h1>
                    </div>
                    <div className="col-8 ms-auto">
                        <div className="ulWrap">
                            <Link to='/'>Home</Link>
                            <Link to='/blogs'>Blogs</Link>
                            <Link to='/write'>Write</Link>
                            {props.user && <>
                                <Link to='/profile' className="userImg">
                                    {props.user.profilePic ? <img src={props.user.profilePic} alt="" /> : <img src='/images/1.webp' alt="" />}
                                </Link>
                                <b onClick={props.logout}>Logout</b>
                            </>}

                            {
                                !props.user &&
                                <>
                                    <Link to='/register'>Register</Link>
                                    <Link to='/login'>Login</Link>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { logout })(Navbar)