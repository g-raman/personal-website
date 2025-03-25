import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const year = new Date().getUTCFullYear();
  return (
    <footer className="mt-auto flex items-center justify-between">
      <p>&copy;&nbsp;{year} Raman Gupta</p>

      <ul className="flex gap-4 text-xl">
        <li>
          <a href="https://github.com/g-raman" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>

        <li>
          <a
            className="hover:text-[#0a66c2]"
            href="https://linkedin.com/in/gupta-raman"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
