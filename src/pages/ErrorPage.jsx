import React from "react";

function ErrorPage() {
  return (
    <div className="error-page">
      <h2
        style={{
          fontWeight: "bold",
          marginBottom: "1.5rem",
        }}
      >
        Page not found
      </h2>
      <p
        style={{
          textAlign: "center",
        }}
      >
        Please try again later or verify your URL
      </p>
    </div>
  );
}

export default ErrorPage;
