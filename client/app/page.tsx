"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [quotes, setQuotes] = useState({ text: "Loading...", author: "- - -" });

  const fetchQuotes = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/quotes");
      const data = await response.json();

      if (data && data.text && data.author) {
        setQuotes(data);
      }
    } catch (error) {
      console.error("Failed to fetch quotes:", error);
    }
  };

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      void fetchQuotes();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
      <h1 className="text-4xl font-bold mb-4">Random Quote</h1>
      <p className="text-xl mb-2">{quotes.text}</p>
      <p className="text-lg text-gray-600">{quotes.author}</p>
      <button
        type="button"
        onClick={fetchQuotes}
        className="px-4 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        New Quote
      </button>
    </div>
  );
}

