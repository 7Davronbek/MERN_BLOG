import React from 'react'
import axios from "axios";
import { useEffect } from 'react';

const News = () => {
    const getPosts = async () => {
        const res = await axios.get("/posts")
        console.log(res);
    }
    
    useEffect(() => {
        getPosts()
    }, [])
    
  return (
    <div className='News'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>News</h2>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4">
                    <div className="cards">
                        <div className="img"></div>
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quos nulla doloribus, quisquam sit aut, voluptatibus enim distinctio cupiditate magni, voluptatum aliquam dolorem ad animi? Sint minima excepturi a in!</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News