import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      alert("Account Created Successfully!");
      console.log(data);

    } catch (error) {
      alert(error.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      
      {/* LEFT SIDE BRAND */}
      <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-10">
        <div>
          <h1 className="text-5xl font-bold mb-6">Furniro</h1>
          <p className="text-lg opacity-90">
            Premium furniture for modern living.
            Create your account and start shopping today.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Create Account
          </h2>

          <form onSubmit={submitHandler} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
