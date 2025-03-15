import React from "react";
import "./Auth.css"; // Add CSS for styling

export default function SignUp() {
  return (
    <div className="auth-container">
      <h2>Create Your Account</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/signin">Sign In</a></p>
    </div>
  );
}
