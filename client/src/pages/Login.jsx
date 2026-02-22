import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await loginUser({
        email,
        password,
      });

      alert("Login Successful!");
      console.log(data);

      // ✅ IMPORTANT: Save token
      localStorage.setItem("token", data.token);

      // (optional but good practice)
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/home");

    } catch (error) {
      alert(error.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      
      {/* LEFT SIDE BRAND */}
      <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-gray-800 to-black text-white p-10">
        <div>
          <h1 className="text-5xl font-bold mb-6">Welcome Back</h1>
          <p className="text-lg opacity-90">
            Login to continue exploring premium furniture.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Login
          </h2>

          <form onSubmit={submitHandler} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-900 transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-black font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
