import React from "react";

export default function ResultCard({ result }) {
  if (!result) return null;
  const { predictedMarriageAge, marriageType, message } = result;

  return (
    <div className="result modern-result">
      <div className="result-header">
        <h2>Prediction</h2>
        <div className="result-age">{predictedMarriageAge}</div>
      </div>

      <div className="result-body">
        <span className="result-type-badge">{marriageType}</span>
        <p className="message">{message}</p>
      </div>
    </div>
  );
}
