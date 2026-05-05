import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {
    // declare our state here 
    const [user_name, setUser_name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    // 3 states for posting data 
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    // password strength checker 
    const [strength, setStrength] = useState("")

    // step 2 
    // ==========================================================================
    


    // function to handle submit 
    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("Please wait...")

        //    create an empty digital envelope 
        const formdata = new FormData()
        formdata.append("user_name", user_name)
        formdata.append("email", email)
        formdata.append("phone", phone)
        formdata.append("password", password)
        
        try {
            const response = await axios.post("http://asombakifaru.alwaysdata.net/api/signup", formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")
        }

    }
    // try catch means that if everything goes well we use ry, if anything goes wrong, use catch 

    return (
        <div className="row mt-2 justify-content-center">
            <div className='col-md-6 card shadow p-4 mt-3 mb-3 text-shadow primary button' style={{ backgroundColor: "light coral" }}>
                <h1>Sign up</h1>
                {/* bind the states  */}
                <h2 className="text-warning">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className="text-danger">{error}</h2>


                <form action="" onSubmit={handlesubmit}>
                    <input type="text" placeholder='Enter username' className='form-control' onChange={(e) => setUser_name(e.target.value)} /> <br />

                    < input type="email" placeholder=' Enter email' className='form-control' onChange={(e) => setEmail(e.target.value)} /> <br />

                    <input type="password" placeholder='Enter password' className='form-control' onChange={(e) => setPassword(e.target.value)} /> <br />

                    <input type="number" placeholder='Enter phone' className='form-control ' onChange={(e) => setPhone(e.target.value)} /> <br /><br />

                    <button type='submit' className='btn btn-outline-dark w-100 hoover'>Sign up</button><br />


                    <p>Already have an account? <Link to="/signin">Sign in</Link>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Signup