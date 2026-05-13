import React, { useState } from 'react'
import axios from 'axios'

const Donations = () => {
  const [phone, setPhone] = useState("")
  const [amount, setAmount] = useState("")
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handlesubmit = async (e) => {
    e.preventDefault()

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
      setPhone("")
      setAmount("")
    } catch (error) {
      setError(error.response?.data?.message || error.message)
      setLoading("")
    }
  }

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-4">

        <h1 className="text-center">Donate</h1>
        <p className="text-center">
          All proceeds of the donations go to organizations such as InuaMtoto and EduCare which support underprivileged students through their primary and secondary education.
        </p>

        <h3 className="text-warning">{loading}</h3>
        <h3 className="text-success">{success}</h3>
        <h3 className="text-danger">{error}</h3>

        <form onSubmit={handlesubmit}>
          <input
            type="number"
            className="form-control mb-3"
            placeholder="Enter phone 254XXXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            type="number"
            className="form-control mb-3"
            placeholder="Enter donation amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <input
            type="submit"
            className="btn btn-outline-success w-100"
            value="Donate Now"
          />
        </form>

      </div>
    </div>
  )
}

export default Donations