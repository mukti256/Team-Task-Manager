import { useState } from "react";

import axios from "axios";

import {
  useNavigate,
  Link
} from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);


  const handleLogin = async () => {

    try {

      const res = await axios.post(
        "https://team-task-manager-production-1376.up.railway.app/api/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      alert("Invalid Credentials");

    }
  };



  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial"
      }}
    >

      <div
        style={{
          background: "#1e293b",
          padding: "40px",
          borderRadius: "20px",
          width: "380px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)"
        }}
      >

        <h1
          style={{
            color: "white",
            marginBottom: "10px",
            fontSize: "35px"
          }}
        >
          Welcome Back 👋
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px"
          }}
        >
          Login to continue managing tasks
        </p>


        {/* Email */}

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
            borderRadius: "12px",
            border: "none",
            outline: "none",
            fontSize: "15px"
          }}
        />


        {/* Password */}

        <div
          style={{
            position: "relative",
            marginBottom: "15px"
          }}
        >

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "none",
              outline: "none",
              fontSize: "15px"
            }}
          />


          <span
            onClick={() =>
              setShowPassword(!showPassword)
            }
            style={{
              position: "absolute",
              right: "15px",
              top: "15px",
              cursor: "pointer",
              color: "#0f172a",
              fontWeight: "bold"
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </span>

        </div>


        {/* Forgot Password */}

        <div
          style={{
            textAlign: "right",
            marginBottom: "25px"
          }}
        >

          <a
            href="#"
            style={{
              color: "#38bdf8",
              textDecoration: "none",
              fontSize: "14px"
            }}
          >
            Forgot Password?
          </a>

        </div>


        {/* Login Button */}

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "12px",
            background: "#38bdf8",
            color: "white",
            fontSize: "17px",
            cursor: "pointer",
            marginBottom: "20px"
          }}
        >
          Login
        </button>


        {/* Contact */}

        <div
          style={{
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "14px"
          }}
        >

          Need help?

          <span
            style={{
              color: "#38bdf8",
              cursor: "pointer",
              marginLeft: "5px"
            }}
          >
            Contact Organization
          </span>

        </div>


        {/* Signup */}

        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#94a3b8"
          }}
        >

          Don’t have an account?

          <Link
            to="/signup"
            style={{
              color: "#38bdf8",
              marginLeft: "5px",
              textDecoration: "none"
            }}
          >
            Signup
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;
