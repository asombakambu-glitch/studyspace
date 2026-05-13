import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GetBlogs = () => {

  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")

  const getblogs = async () => {

    setLoading("Please wait...")
    setError("")

    try {

      const response = await axios.get(
        "http://asombakifaru.alwaysdata.net/api/getblog"
      )

      setBlogs(response.data)

      setLoading("")

    } catch (error) {

      setError("Failed to fetch blogs")
      setLoading("")
    }
  }

  useEffect(() => {
    getblogs()
  }, [])

  return (
    <div className="container mt-4">

      <h1 className="text-center text-info">
        Community Blogs
      </h1>

      <h3 className="text-warning text-center">
        {loading}
      </h3>

      <h3 className="text-danger text-center">
        {error}
      </h3>

      <div className="row">

        {blogs.map((singleblog, index) => (

          <div className="col-md-4 mb-4" key={index}>

            <div className="card-body">

              <h4>
                {singleblog.user_name}
              </h4>

              <p>
                {singleblog.comments}
              </p>

              <small>
                {singleblog.publish_date}
              </small>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default GetBlogs