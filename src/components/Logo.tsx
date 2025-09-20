import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="inline-flex items-center gap-2 group" aria-label="BlindSpot home">
      <span className="text-2xl leading-none">🙈</span>
      <span className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">BlindSpot</span>
    </Link>
  );
};

export default Logo;
