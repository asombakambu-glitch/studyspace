import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate = useNavigate()

    const [user_name, setUser_name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const [showPassword, setShowPassword] = useState(false)

    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    const [strength, setStrength] = useState("")

    const checkStrength = (password) => {

        if (password.length < 6) {
            setStrength("Weak")
        }

        else if (password.length < 10) {
            setStrength("Medium")
        }

        else {
            setStrength("Strong")
        }

    }

    const handlesubmit = async (e) => {

        e.preventDefault()

        setLoading("Please wait...")
        setError("")
        setSuccess("")

        const formdata = new FormData()

        formdata.append("user_name", user_name)
        formdata.append("email", email)
        formdata.append("phone", phone)
        formdata.append("password", password)

        try {

            const response = await axios.post(
                "http://asombakifaru.alwaysdata.net/api/signup",
                formdata
            )

            setSuccess(response.data.message)

            localStorage.setItem("user", email)

            navigate("/dashboard")

            setLoading("")

            setUser_name("")
            setEmail("")
            setPassword("")
            setPhone("")

        } catch (error) {

            setError(error.message)

            setLoading("")
        }

    }

    return (

        <div className="row mt-2 justify-content-center">

            <div className='col-md-6 card shadow p-4 mt-3 mb-3'>

                <div className="text-center mb-4">

                    <p className="soft-label">
                        Join The Community
                    </p>

                    <h1>
                        Create Account
                    </h1>

                    <p className="muted-text">
                        Start sharing notes, ideas and resources with students.
                    </p>

                </div>

                <h2 className="text-warning">
                    {loading}
                </h2>

                <h2 className="text-success">
                    {success}
                </h2>

                <h2 className="text-danger">
                    {error}
                </h2>

                <form onSubmit={handlesubmit}>

                    <input
                        type="text"
                        placeholder='Enter username'
                        className='form-control'
                        value={user_name}
                        onChange={(e) => setUser_name(e.target.value)}
                    />

                    <br />

                    <input
                        type="email"
                        placeholder='Enter email'
                        className='form-control'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <br />

                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder='Enter password'
                        className='form-control'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            checkStrength(e.target.value)
                        }}
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

                    <p className='mt-2'>
                        Password strength:
                        <strong> {strength}</strong>
                    </p>

                    <br />

                    <input
                        type="number"
                        placeholder='Enter phone'
                        className='form-control'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <br />

                    <button
                        type='submit'
                        className='btn btn-primary-soft w-100'
                    >
                        Sign up
                    </button>

                    <br />
                    <br />

                    <p className="text-center">

                        Already have an account?

                        <Link to="/signin">
                            {" "}Sign in
                        </Link>

                    </p>

                </form>

            </div>

        </div>

    )
}

export default Signup