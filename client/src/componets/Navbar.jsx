import React from 'react'
import InputMask from "react-input-mask";

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="container">
                <div className="row">

                    <InputMask
                        // value={phone}
                        // onChange={e => setPhone(e.target.value)}
                        mask="(99) 999-99-99"
                        maskChar=" "
                    />
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