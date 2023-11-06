import { Link, useLocation } from "react-router-dom";
const links = [
  { text: "About", slug: "/" },
  { text: "Portfolio", slug: "/portfolio" },
  { text: "Contact", slug: "/contact" },
];

export default function Nav() {
  const location = useLocation();
  return (
    <nav className="nav">
      {/* <div className="container-fluid"> */}
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <ul className="">
            {links.map((link) => (
              <li className={location.pathname === link.slug ? "active" : ""}>
                <Link to={link.slug}>{link.text}</Link>
              </li>
            ))}
          </ul>
        {/* </div> */}
      {/* </div> */}
    </nav>
  );
}
