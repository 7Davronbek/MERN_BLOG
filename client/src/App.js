import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {

    const fetchPost = async () => {
      const res = await axios.get('/posts')
      console.log(res);
    }

    
    fetchPost()
  }, [])

  return (
    <>App</>
  )
}

export default App