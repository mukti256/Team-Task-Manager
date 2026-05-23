import { useState } from "react";

import axios from "axios";

import {
  useNavigate,
  Link
} from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [role, setRole] =
    useState("member");

  const [showPassword, setShowPassword] =
    useState(false);


  const handleSignup = async () => {

    try {

      await axios.post(
        "https://team-task-manager-production-1376.up.railway.app/api/auth/signup",
        {
          name,
          email,
          password,
          role
        }
      );

      alert("Signup Successful");

      navigate("/");

    } catch (error) {

      alert("Signup Failed");

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
          width: "400px",
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
          Create Account 🚀
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px"
          }}
        >
          Signup to start managing tasks
        </p>


        {/* Name */}

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
            borderRadius: "12px",
            border: "none",
            outline: "none"
          }}
        />


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
            outline: "none"
          }}
        />


        {/* Password */}

        <div
          style={{
            position: "relative",
            marginBottom: "20px"
          }}
        >

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "none",
              outline: "none"
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


        {/* Role */}

        <select
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "25px",
            borderRadius: "12px",
            border: "none",
            outline: "none"
          }}
        >

          <option value="member">
            Member
          </option>

          <option value="admin">
            Admin
          </option>

        </select>


        {/* Signup Button */}

        <button
          onClick={handleSignup}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "12px",
            background: "#38bdf8",
            color: "white",
            fontSize: "17px",
            cursor: "pointer"
          }}
        >
          Signup
        </button>


        {/* Login Redirect */}

        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#94a3b8"
          }}
        >

          Already have an account?

          <Link
            to="/"
            style={{
              color: "#38bdf8",
              marginLeft: "5px",
              textDecoration: "none"
            }}
          >
            Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Signup;
