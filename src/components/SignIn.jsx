import React from "react";
import "./Auth.css"; // Add CSS for styling

export default function SignIn() {
  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
}

