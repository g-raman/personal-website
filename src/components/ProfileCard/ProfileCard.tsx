import Image from "next/image";
import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileCard() {
  return (
    <div className="flex items-center gap-8">
      <Image
        className="aspect-square rounded-full object-cover"
        src="/headshot.jpeg"
        alt="Picture of Raman Gupta"
        width={150}
        height={150}
      />

      <div className="flex flex-col gap-4">
        <p className="text-4xl font-bold">
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
