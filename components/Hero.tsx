import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, The Name's Sindre", "<Developer/>", "Photo-Enthusiast.tsx"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {/* CHANGE IMAGE TAG (1:02:00 in vid) */}
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media-exp1.licdn.com/dms/image/C4E03AQGcm1bKwUpc9A/profile-displayphoto-shrink_200_200/0/1653395709784?e=1670457600&v=beta&t=x8lEndU5ibYx9wsK9T6un-AE-rlNzni7CVoAejy6KEs"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-5xl md:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A"></Cursor>
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
