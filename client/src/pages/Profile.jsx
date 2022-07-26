import React from 'react'
import { connect } from 'react-redux'

const Profile = (props) => {
    return (
        <div className='Profile'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="cards">
                            <h1 className="h1">Profile</h1>
                            <form>

                                <label htmlFor="picture">Profile picture</label>
                                <div className="d-flex align-items-center">
                                    <input id='picture' type="file" className='d-none' />
                                    <div className="img">
                                        {props.user.profilePic ? <><img src={props.user.profilePic} alt="" /></> : <img src="/images/1.webp" alt="" />}
                                        
                                    </div>
                                    <label htmlFor='picture' className="plus">+</label>
                                </div>

                                <label htmlFor="username">Username</label>
                                <input id='username' type="text" className='form-control' />

                                <label htmlFor="email">Email</label>
                                <input id='email' type="email" className='form-control' />

                                <label htmlFor="password">Password</label>
                                <input id='password' type="password" className='form-control' />

                                <button className='btn myBtn'>Update </button>

                            </form>
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

export default connect(mapStateToProps, null)(Profile)