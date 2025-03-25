import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div className="flex items-baseline justify-between">
      <p className="text-4xl font-bold">Raman Gupta</p>
      <div className="flex gap-4">
        <FontAwesomeIcon icon={faGithub} size="2xl" />
        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
      </div>
    </div>
  );
}
