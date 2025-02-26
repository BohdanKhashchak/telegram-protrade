import { Link } from "@tanstack/react-router";

export const LinkComponent = ({ to, children, className, svgColor }) => {
  return (
    <Link to={to} className={`link-component ${className}`}>
      {children}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 6L15 12L9 18" stroke={svgColor} strokeWidth="1.5" />
      </svg>
    </Link>
  );
};
