import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [posts, setPosts] = useState([])
  const [load, setLoad] = useState(false)
  const btns = () => {
    setLoad(true)
    setTimeout(() => {
        setLoad(false)
    }, 2000);
  }
  useEffect(() => {

    const fetchPost = async () => {
      const res = await axios.get('/posts')
      console.log(res);
    }

    
    fetchPost()
  }, [])

  return (
    <>
      <button disabled={load} onClick={btns} className="btn">Submit </button>
    </>
  )
}

export default App