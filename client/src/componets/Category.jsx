import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Category = () => {
    const [cat, setCat] = useState([])
    const getCat = async () => {
        const res = await axios.get('/categories')
        setCat(res.data)
    }

    useEffect(() => {
        getCat()
    }, [])
    return (
        <div className='Category'>
            <h1>About me</h1>
            <div className="img">
                <img src="/images/1.webp" alt="" />
            </div>
            <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore totam odio laborum sint nam consectetur quos officia eaque, sit eum!
            </h2>
            <h3>Categories</h3>
            <div className="sidebar">
                {cat?.map((c) => (
                    <a key={c._id} href="#">{c.name}</a>
                ))}
            </div>
        </div>
    )
}

export default Category