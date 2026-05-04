import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  // declare our states here 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // declare states for posting data 
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  // function to handle submit 
  const handlesubmit = async (e) =>{
  e.preventDefault()
  setLoading("Please wait..")

  //empty digital envelope
  const formdata = new FormData()
  formdata.append("email", email)
  formdata.append("password", password)

  try{
    const response = await axios.post("http://asombakifaru.alwaysdata.net/api/signin",formdata)
    setSuccess(response.data.message)
    setLoading("")
  } catch(error){
      setError(error.message)
        setLoading("")
  }
  }
  return (
    // mt means margin-top 
    <div className='row mt-2 justify-content-center'>
      <div className='col-md-6 card shadow'>

        <h1>Sign in</h1><br />

        {/* bind the states */}
        <h2 className='text-warning'>{loading}</h2>
        <h2 className='text-success'>{success}</h2>
        <h2 className='text-danger'>{error}</h2>


        <form action=""  onSubmit={handlesubmit}>
          <input type="email" placeholder='Email' className='form-control' onChange={(e) => setEmail(e.target.value)} /><br />

                                                                                                                                                                                                                                                                                                                  
          <input type="password" placeholder='Password' className='form-control' onChange={(e) => setPassword(e.target.value)} /> <br />

  
          <input type="submit" value="Sign In" className='btn btn-outline- w-100' /> <br />

          <p>Don't have an account? <Link to="/signup">Sign up</Link>  </p>

        </form>
      </div>
    </div>
  )
}

export default Signin