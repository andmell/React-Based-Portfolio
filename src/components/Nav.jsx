import { Link, useLocation } from "react-router-dom";
const links = [
  { text: "About", slug: "/" },
  { text: "Portfolio", slug: "/portfolio" },
  { text: "Contact", slug: "/contact" },
];

export default function Nav() {
  const location = useLocation();
  return (
    <nav className="">
          <ul className="flex flex-row">
            {links.map((link) => (
              <li className={location.pathname === link.slug ? "active p-2 bg-blue-100 rounded-lg" : "p-2"}>
                <Link to={link.slug}>{link.text}</Link>
              </li>
            ))}
          </ul>
    </nav>
  );
}
