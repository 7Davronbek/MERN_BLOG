import React from 'react'

const Profile = () => {
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
                                    <div className="img"><img src="/images/1.webp" alt="" /></div>
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

export default Profile