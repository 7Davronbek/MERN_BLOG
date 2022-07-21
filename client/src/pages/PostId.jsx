import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const PostId = () => {
    const [post, setPost] = useState({})
    const location = useLocation()
    const path = location.pathname.split('/')[2]

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`/posts/${path}`)
            setPost(res.data)
        }
        getPost()
    }, [path])

    return (
        <div className='PostId'>
            <div className="container">
                <div className="row">

                    <div className="col-9">

                        {post.photo &&
                            <div className="img">
                                <img src={post.photo} alt="" />
                            </div>
                        }

                        <div className="top d-flex align-items-center   ">
                            <h1>{post.title}</h1>
                            <div className="d-flex aling-items-center ms-auto">
                                <button className="btn btn-outline-dark me-3">Edit</button>
                                <button className="btn btn-outline-danger">Delete</button>
                            </div>
                        </div>
                        <div className="author d-flex align-items-center justify-content-between my-2">
                            <h5>Author: <Link to={`/?user=${post.username}`}>{post.username}</Link></h5>
                            <i>{new Date(post.createdAt).toDateString()}</i>
                        </div>
                        <h6>{post.desc}</h6>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default PostId