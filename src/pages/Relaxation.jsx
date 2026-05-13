import React, { useState } from "react";

const Relaxation = () => {

  const quotes = [
    "Rest is productive too.",
    "Small progress is still progress.",
    "You are capable of amazing things.",
    "Take a breath. You’ve got this.",
    "Consistency beats perfection.",
    "Your future self will thank you."
  ];

  const [quote, setQuote] = useState("");

  const generateQuote = () => {

    const random =
      quotes[Math.floor(Math.random() * quotes.length)];

    setQuote(random);
  };



  return (

    <div className="container mt-4">

      <h1 className="text-center text-info mb-4">
        Relaxation Zone
      </h1>

      <p className="text-center mb-4">
        Refresh your mind before getting back to work.
      </p>



      <div className="row">

        <div className="col-md-4 mb-3">

          <div className="card shadow p-4 text-center h-100">

            <h4>Deep Breathing</h4>

            <p>
              Close your eyes and take slow deep breaths for one minute.
            </p>

          </div>

        </div>



        <div className="col-md-4 mb-3">

          <div className="card shadow p-4 text-center h-100">

            <h4>Water Break</h4>

            <p>
              Drink water and stretch your body for a few minutes.
            </p>

          </div>

        </div>



        <div className="col-md-4 mb-3">

          <div className="card shadow p-4 text-center h-100">

            <h4>Positive Reminder</h4>

            <p>
              You do not need to be perfect. Just stay consistent.
            </p>

          </div>

        </div>

      </div>



      {/* interactive section */}

      <div className="card shadow p-4 mt-4 text-center">

        <h3 className="text-success">
          Motivation Generator
        </h3>

        <p className="mt-3">
          {quote}
        </p>

        <button
          className="btn btn-info mt-2"
          onClick={generateQuote}
        >
          Generate Quote
        </button>

      </div>

    </div>

  );
};

export default Relaxation;