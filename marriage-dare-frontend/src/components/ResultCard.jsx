import React from "react";

export default function ResultCard({ result }) {
  if (!result) return null;
  const { predictedMarriageAge, marriageType, message } = result;

  return (
    <div className="result">
      <h2>Prediction</h2>
      <p>
        <strong>Marriage Age:</strong> {predictedMarriageAge}
      </p>
      <p>
        <strong>Marriage Type:</strong> {marriageType}
      </p>
      <p className="message">{message}</p>
    </div>
  );
}
