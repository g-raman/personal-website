import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-baseline justify-between">
      <Link href="/" className="text-4xl font-bold">
        Raman Gupta
      </Link>
    </div>
  );
}
