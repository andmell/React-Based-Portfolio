import { Link, useLocation } from "react-router-dom";
import mypic from "../assets/Self Photo sq.jpg";
const links = [
  { text: "Home", slug: "/" },
  { text: "About", slug: "/about"},
  { text: "Portfolio", slug: "/portfolio" },
  { text: "Contact", slug: "/contact" },
];

export default function Nav() {
  const location = useLocation();
  return (
    <nav className="border-b-2 relative flex justify-between">
      <div className="nav-left flex items-center">
        <Link to="/">
        <img src={mypic} className="w-16 hidden md:block my-3 ml-5 rounded-full items-center" />
        </Link>
        <h2 className="text-2xl pl-5 font-semibold">
          Andrew Mell
        </h2>
      </div>
      <div className="nav-right flex items-center">
        <ul className="flex flex-col md:flex-row pr-5 space-y-2 md:space-y-0 md:space-x-5">
          {links.map((link, index) => (
            <li
              key={index}
              className={
                location.pathname === link.slug
                  ? "active px-2 md:px-5 py-2 bg-gray-300 rounded-lg"
                  : "px-2 md:px-5 py-2 hover:bg-gray-400 rounded-lg"
              }
            >
              <Link to={link.slug}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}