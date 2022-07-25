import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { PF } from '../tools/contstants'

import { postupdateState, handleDelete } from '../redux/actions/postAction'

const PostId = (props) => {
    const [post, setPost] = useState({})
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
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

                        {/* { */}
                        <div className="img">
                            <img src={PF + post.photo} alt="" />
                        </div>
                        {/* } */}

                        <div className="top d-flex align-items-center">
                            {props.updateMode ? (<>
                                <input value={post.title} autoFocus type="text" className='form-control h2' />
                            </>) : (<>
                                <h1>{post.title}</h1>
                                {post.username === props.user?.username && (
                                    <div className="d-flex aling-items-center ms-auto">
                                        <button onClick={() => dispatch(postupdateState({ updateMode: true }))} className="btn btn-outline-dark me-3">Edit</button>
                                        <button onClick={(id, user, nav) => props.handleDelete(post._id, props.user.username, navigate)} className="btn btn-outline-danger">Delete</button>
                                    </div>
                                )}
                            </>)}
                        </div>
                        <div className="author d-flex align-items-center justify-content-between my-2">
                            <h5>Author: <Link to={`/?user=${post.username}`}>{post.username}</Link></h5>
                            <i>{new Date(post.createdAt).toDateString()}</i>
                        </div>
                        {props.updateMode ? (<>
                            <textarea value={post.desc} className='form-control h6' cols="10" rows="10"></textarea>
                        </>) : (<>
                            <h6>{post.desc}</h6>
                        </>)}

                        {props.updateMode && <>
                            <button onClick={() => dispatch(postupdateState({ updateMode: false }))} className="btn myBtn">Update Post</button>
                        </>}
                    </div>


                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        updateMode: state.post.updateMode
    }
}

export default connect(mapStateToProps, { postupdateState, handleDelete })(PostId)