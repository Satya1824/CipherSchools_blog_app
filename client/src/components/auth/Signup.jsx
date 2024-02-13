import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = ({ handleAuth }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPass("");
  };

  const handleSubmit = async () => {
    if (!name) {
      setError1(true);
      return;
    }
    if (!email) {
      setError2(true);
      return;
    }
    if (!password) {
      setError3(true);
      return;
    }
    if (!confirmPass) {
      setError4(true);
      return;
    }
    if (password !== confirmPass) {
      return toast.error("Passwords do not match!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setLoading(true);
    try {
      const res = await fetch(`${process.env.SERVER_URL}/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();

      if (data.success) {
        resetForm();
        toast.success(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        handleAuth();
      } else {
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong! Please try again after some time!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      resetForm();
    }
    setLoading(false);
  };
  return (
    <div className="sm:w-[70%] lg:w-[50%] w-[90%]">
      <h2 className="text-center text-secondary text-[2rem] mb-5 font-bold">
        Sign Up
      </h2>
      <div className="mb-5 w-full">
        <input
          type="text"
          placeholder="Name"
          className="px-3 py-2 w-full rounded-md bg-transparent focus:outline-none text-secondary"
          style={{ border: error1 ? "1px solid red" : "1px solid #dadada" }}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError1(false);
          }}
        />
      </div>
      <div className="mb-5 w-full">
        <input
          type="email"
          placeholder="Email"
          className="px-3 py-2 w-full rounded-md bg-transparent focus:outline-none text-secondary"
          style={{ border: error2 ? "1px solid red" : "1px solid #dadada" }}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError2(false);
          }}
        />
      </div>

      <div className="mb-5 w-full">
        <input
          type="password"
          placeholder="Password"
          className="px-3 py-2 w-full rounded-md bg-transparent focus:outline-none text-secondary"
          style={{ border: error3 ? "1px solid red" : "1px solid #dadada" }}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError3(false);
          }}
        />
      </div>
      <div className="mb-5 w-full">
        <input
          type="password"
          placeholder="Confirm Password"
          className="px-3 py-2 w-full rounded-md bg-transparent focus:outline-none text-secondary"
          style={{ border: error4 ? "1px solid red" : "1px solid #dadada" }}
          value={confirmPass}
          onChange={(e) => {
            setConfirmPass(e.target.value);
            setError4(false);
          }}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-secondary w-full py-2 rounded-md active:scale-[.99] font-semibold mb-5"
      >
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
