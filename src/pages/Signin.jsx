import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handlesubmit = async (e) => {

    e.preventDefault()

    setLoading("Please wait...")
    setSuccess("")
    setError("")

    const formdata = new FormData()

    formdata.append("email", email)
    formdata.append("password", password)

    try {

      const response = await axios.post(
        "http://asombakifaru.alwaysdata.net/api/signin",
        formdata
      )

      localStorage.setItem("user", email)

      setSuccess(response.data.message)

      setLoading("")

      navigate("/dashboard")

    } catch (error) {

      setError(error.response?.data?.message || error.message)

      setLoading("")

    }

  }

  return (

    <div className="row mt-2 justify-content-center">

      <div className="col-md-6 card shadow p-4 mt-3 mb-3">

        <div className="text-center mb-4">

          <p className="soft-label">
            Welcome Back
          </p>

          <h1>
            Sign in
          </h1>

          <p className="muted-text">
            Access your StudySpace account and continue learning.
          </p>

        </div>

        <h5 className="text-warning text-center">
          {loading}
        </h5>

        <h5 className="text-success text-center">
          {success}
        </h5>

        <h5 className="text-danger text-center">
          {error}
        </h5>

        <form onSubmit={handlesubmit}>

          <input
            type="email"
            placeholder="Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <br />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="form-check mt-2 mb-3">

            <input
              type="checkbox"
              className="form-check-input"
              onChange={() => setShowPassword(!showPassword)}
            />

            <label className="form-check-label">
              Show Password
            </label>

          </div>

          <input
            type="submit"
            value="Sign In"
            className="btn btn-primary-soft w-100"
          />

          <br />
          <br />

          <p className="text-center">

            Don't have an account?

            <Link to="/signup">
              {" "}Sign up
            </Link>

          </p>

        </form>

      </div>

    </div>

  )

}

export default Signin