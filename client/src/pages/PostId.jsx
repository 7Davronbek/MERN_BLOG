import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { PF } from '../tools/contstants'

import { postupdateState, handleDelete, handleEdit } from '../redux/actions/postAction'

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
            dispatch(postupdateState({ title: res.data.title }))
            dispatch(postupdateState({ desc: res.data.desc }))
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
                                <input value={props.title} onChange={(e) => dispatch(postupdateState({ title: e.target.value }))} autoFocus type="text" className='form-control h2' />
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
                            <textarea onChange={(e) => dispatch(postupdateState({ desc: e.target.value }))} value={props.desc} className='form-control h6' cols="10" rows="10"></textarea>
                        </>) : (<>
                            <h6>{post.desc}</h6>
                        </>)}

                        {props.updateMode && <>
                            <button onClick={(id, username, title, desc) => { props.handleEdit(post._id, props.user.username, props.title, props.desc) }} className="btn myBtn">Update Post</button>
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
        updateMode: state.post.updateMode,
        title: state.post.title,
        desc: state.post.desc
    }
}

export default connect(mapStateToProps, { postupdateState, handleDelete, handleEdit })(PostId)