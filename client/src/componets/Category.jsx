import React from 'react'

const Category = () => {
    return (
        <div className='Category'>
            <h1>About me</h1>
            <div className="img">
                <img src="/images/1.webp" alt="" />
            </div>
            <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore totam odio laborum sint nam consectetur quos officia eaque, sit eum!
            </h2>
            <h4>Categories</h4>
            <div className="sidebar">
                <a href="#">Music</a>
                <a href="#">Games</a>
                <a href="#">Photoes</a>
            </div>
        </div>
    )
}

export default Category