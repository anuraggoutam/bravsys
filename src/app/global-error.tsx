"use client";

import { useEffect } from "react";

export default function GlobalError({ reset }: { reset: () => void }) {
  useEffect(() => {
    console.log("GlobalError mounted");
    return () => {
      console.log("GlobalError unmounted");
    };
  }, []);

  const resetHandler = () => {
    console.log("Attempting to recover from error");
    reset();
  };

  const handleRefresh = () => {
    console.log("Refreshing the page");
    window.location.reload();
  };

  return (
    <html lang="en">
      <body className="global-error-body">
        <div className="global-error-container">
          <h2 className="global-error-title">Something went wrong!</h2>
          <div className="global-error-actions">
            <button onClick={resetHandler} className="global-error-button">
              Try again
            </button>
            <span className="global-error-separator">or</span>
            <button onClick={handleRefresh} className="global-error-button">
              Reload the page
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
