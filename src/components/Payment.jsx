import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Payment = () => {
  const { note } = useLocation().state || {}

  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  if (!note) {
    return <h2 className="text-center text-danger">No note selected</h2>
  }

  const amount = note.price

  const handlesubmit = async (e) => {
    e.preventDefault()

    if (!amount) {
      setError("Amount is missing. Check if price is showing in /getnotes.")
      return
    }

    setLoading("Please wait...")
    setSuccess("")
    setError("")

    const formdata = new FormData()
    formdata.append("phone", phone)
    formdata.append("amount", amount)

    try {
      const response = await axios.post(
        "http://asombakifaru.alwaysdata.net/api/mpesa_payment",
        formdata
      )

      setSuccess(response.data.message)
      setLoading("")
    } catch (error) {
      setError(error.response?.data?.message || error.message)
      setLoading("")
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="text-center mb-4">

        <p className="soft-label">
          Secure Checkout
        </p>

        <h1>
          Lipa na M-Pesa
        </h1>

        <p className="muted-text">
          Complete payment to access this study material.
        </p>

      </div>

      <div className="col-md-6 card shadow p-4">

        <div className="soft-box mb-4">

          <p className="soft-label">
            Study Material
          </p>

          <h4>
            Uploaded by {note.user_name}
          </h4>

          <p className="muted-text">
            {note.file}
          </p>

          <h3 style={{ color: "var(--accent-dark)" }}>
            Ksh {note.price}
          </h3>

        </div>
        <h2 className="text-warning">{loading}</h2>
        <h2 className="text-success">{success}</h2>
        <h2 className="text-danger">{error}</h2>


        <div className="text-center mb-4">
          <h3 style={{ color: "#2aaa4a" }}>M-PESA</h3>
          <p className="muted-text">Secure mobile payment</p>
        </div>

        <form onSubmit={handlesubmit}>
          <input
            type="number"
            className="form-control"
            placeholder="Enter phone 254XXXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <br />

          <input
            type="submit"
            className="btn btn-outline-dark w-100"
            value="Make payment"
          />
        </form>

      </div>
    </div>
  )
}

export default Payment