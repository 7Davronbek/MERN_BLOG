import React, { useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const News = () => {
    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        const res = await axios.get("/posts")
        setPosts(res.data)
        console.log(res);
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className='News'>
            <div className="container">
                <div className="row">
                    <div className="col-12 py-5 text-center">
                        <h2 className='h1'>News</h2>
                    </div>
                </div>

                <div className="row">

                    {posts && posts.map((post) => (
                        <div key={post.id} className="col-lg-4">
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

                    {/* <div className="col-lg-4">
                        <div className="cards text-center">
                            <div className="img">
                                <img src="/images/1.webp" alt="" className="w-100" />
                            </div>
                            <div className="category mt-2 d-flex align-items-center justify-content-center">
                                <a className='me-3' href="#">Music</a>
                                <a href="#">Life</a>
                            </div>
                            <Link to='/' className="cardsBody">
                                <h3>Lorem, ipsum dolor.</h3>
                                <i>Mon May 17 2021</i>
                                <p className='text-start mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quos nulla doloribus, quisquam sit aut, voluptatibus enim distinctio cupiditate magni, voluptatum aliquam dolorem ad animi? Sint minima excepturi a in!</p>
                            </Link>

                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default News