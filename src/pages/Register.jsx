import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    alert("Account created successfully!");

    navigate("/login");
  };

  return (
    <div className="auth-page">
      <h1>Create Account</h1>

      <form onSubmit={handleRegister}>

        <input
          type="text"
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          placeholder="Email"
          required
        />

        <input
          type="password"
          placeholder="Password"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          required
        />

        <button className="main-btn">
          Create Account
        </button>

      </form>

      <p>
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;