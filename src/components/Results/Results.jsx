import React from "react";
import "../css/results.css";

function Results({ age }) {
  return (
    <section className="results-wrapper">
      <h1 className="years unit">
        {age.years !== null ? <span className="result-num">{age.years} </span> : <span className="lines">- -</span>} years
      </h1>
      <h2 className="months unit">
        {age.months !== null ? <span className="result-num">{age.months } </span> : <span className="lines">- -</span>} months
      </h2>
      <h2 className="days unit">
        {age.days !== null ?  <span className="result-num">{age.days } </span> : <span className="lines">- -</span>} days
      </h2>
    </section>
  );
}

export default Results;