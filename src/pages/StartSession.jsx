import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StartSession = () => {
  const navigate = useNavigate()

  const user = localStorage.getItem("user")
  const [subject, setSubject] = useState("")
  const [duration, setDuration] = useState("")
  const [session_date, setSessionDate] = useState("")
  const [mood, setMood] = useState("")
  const [moodAfter, setMoodAfter] = useState("")
  const [reflection, setReflection] = useState("")

  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [timerRunning, setTimerRunning] = useState(false)
  const [timerId, setTimerId] = useState(null)

  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const startTimer = () => {
    if (timerRunning) return

    const id = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(id)
          setTimerRunning(false)
          setSuccess("Focus session complete ✨ Take a short mindful break.")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    setTimerId(id)
    setTimerRunning(true)
  }

  const pauseTimer = () => {
    clearInterval(timerId)
    setTimerRunning(false)
  }

  const resetTimer = () => {
    clearInterval(timerId)
    setTimerRunning(false)
    setTimeLeft(25 * 60)
  }

  const handlesubmit = async (e) => {
    e.preventDefault()

    setLoading("Saving your focus session...")
    setSuccess("")
    setError("")

    const formdata = new FormData()

    formdata.append("subject", subject)
    formdata.append("duration", duration)
    formdata.append("session_date", session_date)
    formdata.append("mood", mood)

    try {
      const response = await axios.post(
        "http://asombakifaru.alwaysdata.net/api/study_sessions",
        formdata
      )

      setSuccess(response.data.message || "Session saved ✨")
      setLoading("")

      setSubject("")
      setDuration("")
      setSessionDate("")
      setMood("")
      setMoodAfter("")
      setReflection("")
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
    <div className="container mt-4">

      <div className="text-center mb-5">
        <p className="soft-label">Focus Space</p>

        <h1>Start Session</h1>

        <p className="muted-text">
          Begin a calm study session, track your mood, and stay intentional.
        </p>
      </div>

      <div className="row justify-content-center">

        <div className="col-md-5 mb-4">
          <div className="card shadow p-4 h-100 text-center">

            <p className="soft-label">25 Minute Focus Timer</p>

            <h1 style={{ fontSize: "70px", color: "var(--accent-dark)" }}>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h1>

            <p className="muted-text">
              Use this timer to stay focused without overwhelming yourself.
            </p>

            <div className="d-flex gap-2 justify-content-center flex-wrap">
              <button className="btn btn-primary-soft" onClick={startTimer}>
                Start
              </button>

              <button className="btn btn-whimsy" onClick={pauseTimer}>
                Pause
              </button>

              <button className="btn btn-whimsy" onClick={resetTimer}>
                Reset
              </button>
            </div>

          </div>
        </div>

        <div className="col-md-7 mb-4">
          <div className="card shadow p-4 h-100">

            <p className="soft-label">Session Reflection</p>

            <h3>
              What are you working on today?
            </h3>

            <h5 className="text-warning">{loading}</h5>
            <h5 className="text-success">{success}</h5>
            <h5 className="text-danger">{error}</h5>

            <form onSubmit={handlesubmit}>

              <input
                type="text"
                placeholder="Enter subject or task"
                className="form-control mb-3"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Enter duration e.g. 25 minutes"
                className="form-control mb-3"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
              />

              <input
                type="date"
                className="form-control mb-3"
                value={session_date}
                onChange={(e) => setSessionDate(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Mood before studying e.g. tired, focused, stressed"
                className="form-control mb-3"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Mood after studying e.g. calm, proud, drained"
                className="form-control mb-3"
                value={moodAfter}
                onChange={(e) => setMoodAfter(e.target.value)}
              />

              <textarea
                placeholder="Write a short reflection about the session..."
                className="form-control mb-3"
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
              ></textarea>

              <button
                type="submit"
                className="btn btn-primary-soft w-100"
              >
                Save Session ✨
              </button>

            </form>

          </div>
        </div>

      </div>

    </div>
  )
}

export default StartSession