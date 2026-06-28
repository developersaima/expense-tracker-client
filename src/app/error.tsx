
"use client";
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 p-6 text-center">
      <div className="card bg-base-100 shadow-xl p-8 max-w-md">
        <h2 className="text-2xl font-bold text-error mb-2">Something went wrong!</h2>
        <p className="text-base-content/60 mb-6">{error.message || "An unexpected error occurred."}</p>
        <button 
          onClick={() => reset()} 
          className="btn btn-primary"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}