'use client';

import { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 350,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100,
    });
  }, []);

  return null;
};

export default AOSInitializer;