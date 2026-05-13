import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const GetNotes = () => {

  const navigate = useNavigate()

  const [loading, setLoading] = useState("")
  const [notes, setNotes] = useState([])
  const [error, setError] = useState("")
  const [search, setSearch] = useState("")
  const [message, setMessage] = useState("")
  const [sort, setSort] = useState("")

  const filepath = "http://asombakifaru.alwaysdata.net/"

  const getnotes = async () => {

    setLoading("Please wait...")
    setError("")

    try {

      const response = await axios.get(
        "http://asombakifaru.alwaysdata.net/api/getnotes"
      )

      setNotes(response.data)

      setLoading("")

    } catch (err) {

      console.log(err)

      setError("Failed to fetch notes.")
      setLoading("")

    }
  }

  useEffect(() => {
    getnotes()
  }, [])

  let filtered_notes = notes.filter((item) =>
    item.user_name?.toLowerCase().includes(search.toLowerCase()) ||
    item.description?.toLowerCase().includes(search.toLowerCase()) ||
    item.file?.toLowerCase().includes(search.toLowerCase())
  )

  if (sort === "price-low") {

    filtered_notes = filtered_notes.sort(
      (a, b) => Number(a.price) - Number(b.price)
    )

  }

  if (sort === "price-high") {

    filtered_notes = filtered_notes.sort(
      (a, b) => Number(b.price) - Number(a.price)
    )

  }

  if (sort === "newest") {

    filtered_notes = filtered_notes.sort(
      (a, b) =>
        new Date(b.day_published) -
        new Date(a.day_published)
    )

  }

  return (
    <div className="container mt-4">

      <div className="text-center mb-5">

        <p className="soft-label">
          Community Library
        </p>

        <h1>
          Available Notes
        </h1>

        <p className="muted-text">
          Discover shared study materials from students.
        </p>

      </div>

      <h2 className="text-warning text-center">
        {loading}
      </h2>

      <h2 className="text-danger text-center">
        {error}
      </h2>

      <h5 className="text-center text-success mb-4">
        {message}
      </h5>

      <div className="filters-box mb-5">

        <input
          className="form-control filter-input"
          type="search"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="form-control filter-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >

          <option value="">
            Sort notes
          </option>

          <option value="newest">
            Newest first
          </option>

          <option value="price-low">
            Lowest price
          </option>

          <option value="price-high">
            Highest price
          </option>

        </select>

      </div>



      <div className="row">

        {filtered_notes.length > 0 ? (

          filtered_notes.map((singlenote, index) => (

            <div className="col-md-4 mb-4" key={index}>

              <div className="card h-100">

                <div className="card-body p-4">

                  <p className="soft-label">
                    Study Notes
                  </p>

                  <h4>
                    {singlenote.user_name || "Unknown User"}
                  </h4>

                  <p className="muted-text">
                    {singlenote.description || "No description"}
                  </p>

                  <small>
                    {singlenote.day_published || "No date"}
                  </small>

                  <h5
                    className="mt-3"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    Ksh {singlenote.price || "0"}
                  </h5>

                  {singlenote.file &&
                    singlenote.file !== "undefined" ? (

                    <a
                      href={filepath + singlenote.file}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-whimsy w-100 mt-3"
                    >
                      Open Note
                    </a>

                  ) : (

                    <button
                      className="btn btn-secondary w-100 mt-3"
                      disabled
                    >
                      No File Available
                    </button>

                  )}

                  <button
                    className="btn btn-primary-soft w-100 mt-2"
                    onClick={() =>
                      navigate("/payment", {
                        state: { note: singlenote }
                      })
                    }
                  >
                    ♡ Tip the Author
                  </button>



                  <button
                    className="btn btn-whimsy w-100 mt-2"
                    onClick={() => {

                      const cart = JSON.parse(localStorage.getItem("cart")) || []

                      cart.push(singlenote)

                      localStorage.setItem("cart", JSON.stringify(cart))

                      setMessage("Added to your study collection ✨")

                      setTimeout(() => {
                        setMessage("")
                      }, 2000)
                    }}
                  >
                    ♡ Add to Collection
                  </button>
                </div>

              </div>

            </div>

          ))

        ) : (

          <div className="text-center mt-5">

            <h3>
              Nothing here yet ✨
            </h3>

            <p className="muted-text">
              Try searching something else or upload a new note.
            </p>

          </div>

        )}

      </div>

    </div>
  )
}

export default GetNotes