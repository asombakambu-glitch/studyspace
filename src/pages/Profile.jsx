import axios from "axios"
import React, { useEffect, useState } from "react"

const Profile = () => {
  const [user_name, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [course, setCourse] = useState("")
  const [school, setSchool] = useState("")
  const [study_goal, setStudyGoal] = useState("")
  const [bio, setBio] = useState("")

  const [profiles, setProfiles] = useState([])
  const [hasProfile, setHasProfile] = useState(
    localStorage.getItem("hasProfile")
  )

  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const createprofile = async (e) => {
    e.preventDefault()

    setLoading("Please wait...")
    setSuccess("")
    setError("")

    const formdata = new FormData()
    formdata.append("user_name", user_name)
    formdata.append("email", email)
    formdata.append("course", course)
    formdata.append("school", school)
    formdata.append("study_goal", study_goal)
    formdata.append("bio", bio)

    try {
      const response = await axios.post(
        "http://asombakifaru.alwaysdata.net/api/profile",
        formdata
      )

      setSuccess(response.data.message)
      localStorage.setItem("hasProfile", "true")
      setHasProfile("true")

      setLoading("")
      setUserName("")
      setEmail("")
      setCourse("")
      setSchool("")
      setStudyGoal("")
      setBio("")

      getprofiles()
    } catch (error) {
      setError(error.message)
      setLoading("")
    }
  }

  const getprofiles = async () => {
    try {
      const response = await axios.get(
        "http://asombakifaru.alwaysdata.net/api/getprofile"
      )

      setProfiles(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getprofiles()
  }, [])

  return (
    <div className="container mt-5">

      <div className="text-center mb-5">
        <p className="soft-label">Student Community</p>

        <h1>
          Create your academic <span className="hero-word">identity</span>
        </h1>

        <p className="muted-text">
          Share your goals, interests and learning journey with the Study Space community.
        </p>
      </div>

      {!hasProfile ? (
        <div className="card p-4 mb-5">
          <h3 className="mb-4">Create Your Student Profile</h3>

          <h5 className="text-warning">{loading}</h5>
          <h5 className="text-success">{success}</h5>
          <h5 className="text-danger">{error}</h5>

          <form onSubmit={createprofile}>
            <input
              type="text"
              placeholder="Enter username"
              className="form-control mb-3"
              value={user_name}
              onChange={(e) => setUserName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Enter email"
              className="form-control mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Enter course(optional)"
              className="form-control mb-3"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter school(optional)"
              className="form-control mb-3"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />

            <input
              type="text"
              placeholder="Study goal"
              className="form-control mb-3"
              value={study_goal}
              onChange={(e) => setStudyGoal(e.target.value)}
              required
            />

            <textarea
              placeholder="Short bio"
              className="form-control mb-3"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              required
            ></textarea>

            <button className="btn btn-primary-soft">
              Create Profile
            </button>
          </form>
        </div>
      ) : (
        <div className="card p-4 mb-5 text-center">
          <p className="soft-label">Your Profile</p>

          <h3>Profile already created ✨</h3>

          <p className="muted-text">
            Each student can create one profile. You can still view other student profiles below.
          </p>
        </div>
      )}

      <div className="row">
        {profiles.map((profile, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card p-4 h-100">
              <p className="soft-label">Student Profile</p>

              <h4>{profile.user_name}</h4>

              <p>{profile.email}</p>

              <p>
                <b>Course:</b> {profile.course}
              </p>

              <p>
                <b>School:</b> {profile.school}
              </p>

              <p>
                <b>Goal:</b> {profile.study_goal}
              </p>

              <p className="muted-text">{profile.bio}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Profile