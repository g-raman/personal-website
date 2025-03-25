import Image from "next/image";
import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row">
      <div className="relative h-30 w-30 rounded-full border-2 border-[#0a66c2] bg-white p-[3px]">
        <Image
          className="h-full w-full rounded-full object-cover"
          src="/headshot.jpeg"
          alt="Picture of Raman Gupta"
          width={150}
          height={150}
        />
      </div>

      <div className="flex flex-col items-center gap-4 md:items-start">
        <p className="text-center text-4xl font-bold md:text-left">
          <span>Hey, I&apos;m Raman.</span>
          <br />
          <span className="text-gray-500">
            I&apos;m a Full Stack Developer.
          </span>
        </p>

        <div className="flex gap-4 text-lg">
          <a href="https://github.com/g-raman" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
            &nbsp;GitHub
          </a>
          <a
            className="text-[#0b66c2]"
            href="https://linkedin.com/in/gupta-raman"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            &nbsp;LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
