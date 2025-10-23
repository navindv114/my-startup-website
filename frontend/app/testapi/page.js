"use client";

import { useEffect, useState } from "react";

export default function TestAPI() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => setMessage("Error connecting to backend: " + err));
  }, []);

  return (
    <div className="flex items-center justify-center h-screen text-2xl font-bold">
      {message}
    </div>
  );
}
