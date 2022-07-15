import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <h1>Times news</h1>
                </div>
                <div className="col-6">
                    <div className="ulWrap">
                        <a href="/">Home</a>
                        <a href="/">Blogs</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar