import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container hero-section">

      <div className="row align-items-center w-100">

        <div className="col-md-6">

          <p className="soft-label">
            Your academic wellness hub
          </p>

          <h1>
            Study smarter, reset faster, grow with your <span className="hero-word">community</span>
          </h1>

          <p className="mt-4 muted-text">
            Study Space helps students manage notes, focus sessions, motivation,
            and peer support in one calm digital workspace.
          </p>

          <div className="d-flex gap-3 mt-4 flex-wrap">
            <Link to="/startsession" className="btn btn-info">
              Start Focus Session
            </Link>

            <Link to="/community" className="btn btn-signup">
              Visit the Community Blog and hearwhat your mates have to say
            </Link>
          </div>

        </div>



        <div className="col-md-6 mt-5 mt-md-0">

          <div className="card p-4 hero-card">

            <h3>Today’s Study Panel</h3>

            <p>
              Choose what you need right now and keep your progress moving.
            </p>

            <div className="row mt-4">

              <div className="col-md-6 mb-3">
                <div className="card p-3 h-100">
                  <h5>Notes Library</h5>
                  <p>Upload and review learning materials.</p>
                  <Link to="/getnotes" className="btn btn-primary-soft">
                    Open
                  </Link>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="card p-3 h-100">
                  <h5>Focus Mode</h5>
                  <p>Log your study session and mood.</p>
                  <Link to="/startsession" className="btn btn-primary-soft">
                    Start
                  </Link>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="card p-3 h-100">
                  <h5>Community</h5>
                  <p>Share tips and encouragement.</p>
                  <Link to="/blog" className="btn btn-primary-soft">
                    Share
                  </Link>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="card p-3 h-100">

                  <h5>Profile</h5>

                  <p>
                    Personalize your learning space and student identity.
                  </p>

                  <Link
                    to="/profile"
                    className="btn btn-primary-soft"
                  >
                    Open
                  </Link>

                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="card p-3 h-100">

                  <h5>Support Space</h5>

                  <p>
                    Support students and help grow the StudySpace community.
                  </p>

                  <Link
                    to="/donations"
                    className="btn btn-primary-soft"
                  >
                    Support
                  </Link>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;