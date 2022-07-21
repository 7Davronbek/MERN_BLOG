import React, { useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Category from './Category';

const News = () => {
    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        const res = await axios.get("/posts")
        setPosts(res.data)
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className='News'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8  text-center">
                        <h2 className='h1 py-5'>News</h2>


                        <div className="row">

                            {posts && posts.map((post, index) => (
                                <div key={index} className="col-lg-6 mb-5">
                                    <div className="cards text-center">
                                        <div className="img">
                                            {post.photo &&
                                                <img src={post.photo} alt="" className="w-100" />
                                            }
                                        </div>
                                        <div className="category mt-2 d-flex align-items-center justify-content-center">
                                            {post.categories && post.categories.map((category, index) => (
                                                <Link to={'/'} key={index} className='me-3'>{category.name}</Link>
                                            ))}
                                        </div>
                                        <Link to={`/post/${post._id}`} className="cardsBody">
                                            <h3>{post.title}</h3>
                                            <i>{new Date(post.createdAt).toDateString()}</i>
                                            <p className='text-start mt-3'>{post.title}</p>
                                        </Link>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="col-lg-4">
                        <Category />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8">
                    </div>


                </div>
            </div>
        </div>
    )
}

export default News