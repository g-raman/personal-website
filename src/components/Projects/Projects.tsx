import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export interface Project {
  name: string;
  description: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    name: "uEnroll",
    description:
      "1200+ monthly users. A modern schedule builder for uOttawa students",
    github: "https://github.com/g-raman/uenroll",
    demo: "https://uenroll.ca",
  },
];

export default function Projects() {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold sm:text-3xl">Projects</h2>
      <ul className="mt-2">
        {projects.map(project => (
          <li key={project.name} className="">
            <h3 className="text-lg font-medium sm:text-xl">{project.name}</h3>
            <p>{project.description}</p>

            <div className="flex gap-4">
              {project.github && (
                <a
                  className="cursor-pointer underline hover:text-gray-500"
                  href={project.github}
                  target="_blank"
                >
                  Github&nbsp;
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
                </a>
              )}
              {project.demo && (
                <a
                  className="cursor-pointer underline hover:text-gray-500"
                  href="https://uenroll.ca"
                  target="_blank"
                >
                  Live Demo&nbsp;
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
