import axios from 'axios'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Write = (props) => {

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPost = {
            username: props.user.username,
            title,
            desc
        }
        if (file) {
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append('name', filename)
            data.append('file', file)
            try {
                await axios.post('/upload', data)
            } catch (err) {
                console.log(err);
            }
        }

        try {
            const res = await axios.post('/posts', newPost)
            console.log(res);
            navigate(`/post/${res.data._id}`, { replace: true })
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='Write'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <form onSubmit={handleSubmit}>
                            {file &&
                                <div style={{ width: "100%", height: "300px" }} className="img mb-5">
                                    <img src={URL.createObjectURL(file)} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
                                </div>
                            }
                            <label htmlFor="file">+</label>
                            <input required onChange={e => setFile(e.target.files[0])} className='d-none' type="file" id='file' />
                            <input required onChange={e => setTitle(e.target.value)} type="text" className='form-control title' placeholder='Title' />
                            <textarea required onChange={e => setDesc(e.target.value)} className='form-control story' cols="30" rows="10" placeholder='Tell your story....'></textarea>

                            <button className="btn myBtn">Create post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, null)(Write)