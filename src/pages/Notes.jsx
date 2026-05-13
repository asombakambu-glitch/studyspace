import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Notes = () => {
  const navigate = useNavigate()
  const user = localStorage.getItem("user")
  const [user_name, setUserName] = useState("")
  const [file, setFile] = useState("")
  const [day_published, setDayPublished] = useState("")
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handlesubmit = async (e) => {
    e.preventDefault()
    setLoading("Please wait...")
    setSuccess("")
    setError("")


    const formdata = new FormData()
    formdata.append("user_name", user_name)
    formdata.append("file", file)
    formdata.append("day_published", day_published)
    formdata.append("description", description);
    formdata.append("price", price);

    try {
      const response = await axios.post("http://asombakifaru.alwaysdata.net/api/notes", formdata)
      setSuccess(response.data.message)
      setLoading("")
      setUserName("")
      setFile("")
      setDayPublished("")
      setDescription("")
      setPrice("")


    } catch (error) {
      setError(error.response?.data?.message || error.message)
      setLoading("")
    }
  }

  if (!user) {

    return (

      <div className="container mt-5 text-center">

        <div className="card p-5">

          <p className="soft-label">
            Account Required
          </p>

          <h1>
            Please sign in first
          </h1>

          <p className="muted-text">
            You need an account to use this feature.
          </p>

          <button
            className="btn btn-primary-soft"
            onClick={() => navigate("/signin")}
          >
            Go to Sign In
          </button>

        </div>

      </div>

    )

  }

  return (
    <div className='row mt-2 justify-content-center'>
      <div className='col-md-8 card shadow'>

        <h1>Notes</h1>
        <p>Save and review your study notes</p>

        <h3 className='text-warning'>{loading}</h3>
        <h3 className='text-success'>{success}</h3>
        <h3 className='text-danger'>{error}</h3>

        <form onSubmit={handlesubmit}>

          <input
            type="text"
            placeholder="Enter username"
            className="form-control mb-3"
            value={user_name}
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            type="file"
            className="form-control mb-3"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <input
            type="date"
            className="form-control mb-3"
            value={day_published}
            onChange={(e) => setDayPublished(e.target.value)}
          />



          <textarea
            placeholder="Describe your notes"
            className="form-control mb-3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <input
            type="text"
            placeholder="Enter price e.g. 50"
            className="form-control mb-3"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <input
            type="submit"
            value="Save Note"
            className="btn btn-outline-primary w-100"
          />

          <p>View all notes here <Link to="/getnotes">Library</Link>
          </p>

        </form>

      </div>
    </div>
  )
}

export default Notes