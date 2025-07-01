"use client";

import axios, { AxiosError } from 'axios';
import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import { AdminContext, AuthContext } from './Layout';
import { motion } from "framer-motion";

const Contact: React.FC = () => {

  const { admin } = useContext(AuthContext);
  const { toggleRegetMessage } = useContext(AdminContext);
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
        toggleRegetMessage();
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
    <section className="flex flex-col items-center py-10" id="contact">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 py-10 mb-5 text-center" data-aos="fade-up">
        Get in touch
      </h1>
      <div className="flex flex-col lg:flex-row gap-15 lg:gap-30 justify-center">
        <div className="flex flex-col gap-4 items-center font-bold lg:pt-15" data-aos="fade-up">
          <div className="flex gap-3">
            <MapPin className="text-blue-500/60" />
            Coimbatore
          </div>
          <div className="flex gap-3">
            <Mail className="text-purple-500/60" />
            nowfalmmuhammed@gmail.com
          </div>
          <div className="flex gap-3">
            <Phone className="text-blue-500/60" />
            +91 8610297319
          </div>
        </div>

        <form className="flex flex-col gap-5 w-100" onSubmit={handleSubmit} data-aos="fade-up">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border border-t-blue-400 border-b-purple-400 border-r-purple-400 border-l-blue-400 rounded-box p-2"
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
            className="border rounded-box p-2 border-t-blue-400 border-b-purple-400 border-r-purple-400 border-l-blue-400"
            value={inputs.email}
            onChange={handleInputs}
            required
            autoComplete="email"
            suppressHydrationWarning
          />
          <textarea
            name="msg"
            placeholder="Message"
            className="border rounded-box h-20 p-2 border-t-blue-400 border-b-purple-400 border-r-purple-400 border-l-blue-400"
            value={inputs.msg}
            onChange={handleInputs}
            required
            suppressHydrationWarning
          />
          <div className="flex flex-col items-center my-3">
            <motion.button
              className="btn border-none bg-gradient-to-r  from-purple-400 to-blue-400 text-white font-semibold text-lg shadow-xl"
              onClick={() => navigator.vibrate(50)}
              suppressHydrationWarning
              whileHover={{ scale: 1.10 }}
              whileTap={{ scale: 0.90 }}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </motion.button>
            <span className={`${result.success ? "text-green-600" : "text-red-600"} text-lg mt-5`}>{result.msg}</span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;