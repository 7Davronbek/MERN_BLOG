import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const PostId = () => {
    const location = useLocation()
    const path = location.pathname.split('/')[2]

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`/posts/${path}`)
            console.log(res);
        }
        getPost()
    }, [path])

    return (
        <div className='PostId'>
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="img">
                            <img src="/images/1.webp" alt="" />
                        </div>
                        <div className="top d-flex align-items-center   ">
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <div className="d-flex aling-items-center ms-auto">
                                <button className="btn btn-outline-dark me-3">Edit</button>
                                <button className="btn btn-outline-danger">Delete</button>
                            </div>
                        </div>
                        <div className="author d-flex align-items-center justify-content-between my-2">
                            <h5>Author: <a href="#">Safak</a></h5>
                            <i>1 hour ago</i>
                        </div>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusantium quam maxime incidunt perspiciatis, nobis beatae distinctio quisquam saepe praesentium possimus, harum tenetur molestias at aspernatur. Aperiam asperiores ad possimus!</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostId