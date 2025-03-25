import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div className="flex items-baseline justify-between">
      <p className="text-4xl font-bold">Raman Gupta</p>
      <div className="flex gap-4">
        <a href="https://github.com/g-raman" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </a>
        <a href="https://linkedin.com/in/gupta-raman" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </a>
      </div>
    </div>
  );
}
