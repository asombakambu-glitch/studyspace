import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("user")

    navigate("/signin")

  }

  const user = localStorage.getItem("user")

  return (

    <nav
      className="navbar navbar-expand-lg px-5 py-2 mb-4"
      style={{
        background: "rgba(255, 253, 251, 0.7)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: "20px",
        margin: "15px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
        minHeight: "90px"
      }}
    >

      <div className="container">

        <Link
          className="navbar-brand brand-logo"
          to="/dashboard"
        >
          ✦ StudySpace
        </Link>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav ms-auto align-items-center gap-2">

            <li>
              <Link
                className="nav-link"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                className="nav-link"
                to="/notes"
              >
                Upload Notes
              </Link>
            </li>

            <li>
              <Link
                className="nav-link"
                to="/getnotes"
              >
                Library
              </Link>
            </li>

            <li>
              <Link
                className="nav-link"
                to="/community"
              >
                Community
              </Link>
            </li>

            <li>
              <Link
                className="nav-link"
                to="/startsession"
              >
                Focus
              </Link>
            </li>

            <li>
              <Link
                className="nav-link"
                to="/cart"
              >
                ♡ Saved
              </Link>
            </li>

            <button
              className="btn btn-whimsy"
              onClick={() =>
                document.body.classList.toggle("dark-mode")
              }
            >
              🌙
            </button>

            {user ? (

              <button
                onClick={logout}
                className="btn btn-primary-soft"
              >
                Logout
              </button>

            ) : (

              <div className="d-flex gap-2">

                <Link
                  className="btn btn-whimsy"
                  to="/signin"
                >
                  Sign In
                </Link>

                <Link
                  className="btn btn-primary-soft"
                  to="/signup"
                >
                  Sign Up
                </Link>

              </div>

            )}

          </ul>

        </div>

      </div>

    </nav>

  );
};

export default Navbar;