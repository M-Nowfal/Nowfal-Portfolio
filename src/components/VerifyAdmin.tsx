"use client";

import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { AuthContext } from './Layout';

const VerifyAdmin: React.FC = () => {

  const { admin, toggleAdmin } = useContext(AuthContext);
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!password.trim()) {
      setError("Enter the password");
      return;
    } else if (isNaN(Number(password))) {
      setError("Password should be Number");
      return;
    }
    try {
      setLoading(true);
      setError("");
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/verifyadmin`, password);
      if (localStorage.getItem("admin")) {
        localStorage.removeItem("admin");
        toggleAdmin();
        router.push("/");
      } else {
        localStorage.setItem("admin", response.data.admin);
        toggleAdmin();
        router.push("/");
      }
    } catch (err: unknown) {
      const error = err instanceof AxiosError ? err.response?.data.message : err;
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-300 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5" suppressHydrationWarning>
        <label htmlFor="password" className="font-bold text-2xl text-blue-500">
          {admin ? "Password for Admin Log-out" : "Password for Admin Log-in"}
        </label>
        <input
          className="border border-gray-500 p-3 rounded-box"
          type="password"
          name="password"
          id="password"
          autoFocus
          placeholder="Enter Admin Passsword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={() => setError("")}
          suppressHydrationWarning
        />
        <button
          className="btn bg-blue-500 border-none shadow-2xl text-white"
          disabled={loading}
          suppressHydrationWarning
        >
          {loading ? "Submitting" : "Submit"}
        </button>
        <div className="flex justify-center">
          {error && <span className="text-red-600 text-xl">{error}</span>}
        </div>
      </form>
    </div>
  );
}

export default VerifyAdmin;