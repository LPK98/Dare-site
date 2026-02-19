import React, { useState } from "react";
import PredictionForm from "../components/PredictionForm";
import ResultCard from "../components/ResultCard";
import { getPrediction } from "../services/predictionService";

export default function Home() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      const res = await getPrediction(formData);
      setResult(res);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">Marriage Dare Predictor 💍</h1>
        <PredictionForm onSubmit={handleSubmit} loading={loading} />
        <ResultCard result={result} />
      </div>
    </div>
  );
}
