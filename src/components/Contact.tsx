"use client";

import axios, { AxiosError } from 'axios';
import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import { AdminContext, AuthContext } from './Layout';

const Contact: React.FC = () => {

  const { admin } = useContext(AuthContext);
  const { setRegetMessage } = useContext(AdminContext);
  const [inputs, setInputs] = useState({
    name: "", email: "", msg: ""
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({ success: false, msg: "" });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (result.msg) {
      timeoutId = setTimeout(() => {
        setResult({ success: false, msg: "" });
      }, 3000);
    }
    return () => clearTimeout(timeoutId);
  }, [result.msg]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      setResult({ success: false, msg: "" });
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/messages`, inputs);
      setResult({ success: true, msg: response.data.message });
      if (admin) {
        setRegetMessage(true);
      }
      setInputs({
        name: "", email: "", msg: ""
      });
    } catch (err) {
      const error = err instanceof AxiosError ? err.response?.data.error : err;
      console.log(error);
      setResult({ success: false, msg: "Failed to send message retry" });
    } finally {
      setLoading(false);
    }
  };

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs(prev => (
      { ...prev, [name]: value }
    ));
  };

  return (
    <div className="flex flex-col items-center py-10 bg-base-300" id="contact">
      <h1 className="text-4xl font-bold text-blue-500 py-10 mb-5 text-center" data-aos="fade-right">
        Get in touch
      </h1>
      <div className="flex flex-col lg:flex-row gap-15 lg:gap-30 justify-center">
        <div className="flex flex-col gap-4 items-center font-bold lg:pt-15" data-aos="fade-right">
          <div className="flex gap-3">
            <MapPin className="text-blue-500" />
            Coimbatore
          </div>
          <div className="flex gap-3">
            <Mail className="text-blue-500" />
            nowfalmmuhammed@gmail.com
          </div>
          <div className="flex gap-3">
            <Phone className="text-blue-500" />
            +91 8610297319
          </div>
        </div>

        <form className="flex flex-col gap-5 w-100" onSubmit={handleSubmit} data-aos="fade-left">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border border-gray-500 rounded-box p-2"
            value={inputs.name}
            onChange={handleInputs}
            required
            autoComplete="name"
            suppressHydrationWarning
          />
          <input
            type="text"
            name="email"
            placeholder="E-Mail"
            className="border border-gray-500 rounded-box p-2"
            value={inputs.email}
            onChange={handleInputs}
            required
            autoComplete="email"
            suppressHydrationWarning
          />
          <textarea
            name="msg"
            placeholder="Message"
            className="border border-gray-500 rounded-box h-20 p-2"
            value={inputs.msg}
            onChange={handleInputs}
            required
            suppressHydrationWarning
          />
          <div className="flex flex-col items-center my-3">
            <button
              className="btn bg-blue-500 text-white font-semibold text-lg shadow-2xl"
              suppressHydrationWarning
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            <span className={`${result.success ? "text-green-600" : "text-red-600"} text-lg mt-5`}>{result.msg}</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;