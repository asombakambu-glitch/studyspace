import axios from "axios"
import React, { useEffect, useState } from "react"

const Community = () => {
  const [blogs, setBlogs] = useState([])

  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  const [user_name, setUserName] = useState("")
  const [comments, setComments] = useState("")
  const [publish_date, setPublishDate] = useState("")

  const getblogs = async () => {
    setLoading("Loading community posts...")
    setError("")

    try {
      const response = await axios.get(
        "http://asombakifaru.alwaysdata.net/api/getblog"
      )

      setBlogs(response.data)
      setLoading("")
    } catch (error) {
      setError("Failed to fetch community posts.")
      setLoading("")
    }
  }

  useEffect(() => {
    getblogs()
  }, [])

  const blog = async (e) => {
    e.preventDefault()

    setLoading("Posting your thought...")
    setError("")
    setMessage("")

    const data = new FormData()
    data.append("user_name", user_name)
    data.append("comments", comments)
    data.append("publish_date", publish_date)

    try {
      const response = await axios.post(
        "http://asombakifaru.alwaysdata.net/api/blog",
        data
      )

      setMessage(response.data.message)
      setLoading("")
      setUserName("")
      setComments("")
      setPublishDate("")

      getblogs()
    } catch (error) {
      setError(error.message)
      setLoading("")
    }
  }

  return (
    <div className="container mt-4">

      <div className="text-center mb-5">
        <p className="soft-label">
          Community Space
        </p>

        <h1>
          Student Voices ✨
        </h1>

        <p className="muted-text">
          Share motivation, advice and study experiences with other students.
        </p>
      </div>

      <h5 className="text-warning text-center">{loading}</h5>
      <h5 className="text-danger text-center">{error}</h5>
      <h5 className="text-success text-center">{message}</h5>

      <form onSubmit={blog} className="card p-4 shadow mb-5">
        <p className="soft-label">
          Share a Thought
        </p>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter your name"
          value={user_name}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <textarea
          className="form-control mb-3"
          placeholder="Write something helpful..."
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          required
        ></textarea>

        <input
          type="date"
          className="form-control mb-3"
          value={publish_date}
          onChange={(e) => setPublishDate(e.target.value)}
          required
        />

        <button className="btn btn-primary-soft">
          Post to Community
        </button>
      </form>

      <div className="row">
        {blogs.length > 0 ? (
          blogs.map((singleblog, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body p-4">
                  <p className="soft-label">
                    Community Note
                  </p>

                  <h4>
                    {singleblog.user_name}
                  </h4>

                  <p className="muted-text">
                    {singleblog.comments}
                  </p>

                  <small>
                    {singleblog.publish_date}
                  </small>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center mt-5">
            <h3>
              No community posts yet ✨
            </h3>

            <p className="muted-text">
              Be the first to share something encouraging.
            </p>
          </div>
        )}
      </div>

    </div>
  )
}

export default Community