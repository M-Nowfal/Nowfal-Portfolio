import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {

  const connectWithMe = [
    { icon: "/connect_me_images/LinkedIn.png", url: "https://www.linkedin.com/in/muhammed-nowfal-m-8402bb298/" },
    { icon: "/connect_me_images/github.png", url: "https://github.com/M-Nowfal" },
    { icon: "/connect_me_images/email.png", url: "https://mailto:nowfalmmuhammed@gmail.com" },
    { icon: "/connect_me_images/whatsapp.png", url: "https://wa.me/8610297319?text=Hello%20Nowfal%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect." },
  ];

  return (
    <footer className="footer footer-horizontal footer-center bg-gradient-to-tr from-blue-500/20 to-purple-500/20 text-base-content rounded p-10">
      <h2 className="text-2xl font-bold">Connect with me</h2>
      <p>I&apos;m open to freelance projects, collaborations, and tech discussions.</p>
      <nav>
        <div className="flex items-center gap-4">
          {connectWithMe.map((option, index) => (
            <div key={index} role="button" onClick={() => navigator.vibrate(50)}>
              <Link href={option.url} target="_blank">
                <Image
                  src={option.icon}
                  width={500}
                  height={500}
                  alt="img"
                  className="w-8"
                />
              </Link>
            </div>
          ))}
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Muhammed Nowfal</p>
      </aside>
    </footer>
  );
}

export default Footer;