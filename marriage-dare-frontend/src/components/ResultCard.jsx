import React from "react";

export default function ResultCard({ result }) {
  if (!result) return null;
  const { predictedMarriageAge, marriageType, message } = result;

  return (
    <div className="result modern-result">
      <div className="crystal" aria-hidden="true"></div>
      <div className="result-header">
        <div>
          <h2>Prediction</h2>
          <div className="result-sub">The oracle's gentle whisper</div>
        </div>

        <div className="result-age">{predictedMarriageAge}</div>
      </div>

      <div className="result-body">
        <span className="result-type-badge">{marriageType}</span>
        <div className="fancy-message">✨ {message} ✨</div>
      </div>
    </div>
  );
}
