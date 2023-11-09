import { Link, useLocation } from "react-router-dom";
const links = [
  { text: "About", slug: "/" },
  { text: "Portfolio", slug: "/portfolio" },
  { text: "Contact", slug: "/contact" },
];

export default function Nav() {
  const location = useLocation();
  return (
    <nav className="border-b-2 relative">
      <h2 className="text-2xl pl-5 font-semibold absolute bottom-0 left-0">Andrew Mell</h2>
      <div className="flex justify-end">
          <ul className="flex flex-row pr-5">
            {links.map((link) => (
              <li className={location.pathname === link.slug ? "active px-5 p-2 bg-blue-100 rounded-lg" : "px-5 p-2 hover:bg-blue-500 rounded-lg"}>
                <Link to={link.slug}>{link.text}</Link>
              </li>
            ))}
          </ul>
          </div>
    </nav>
  );
}
