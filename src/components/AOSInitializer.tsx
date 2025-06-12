'use client';

import { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
      offset: 200,
    });
  }, []);

  return null;
};

export default AOSInitializer;