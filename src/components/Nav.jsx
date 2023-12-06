import { Link, useLocation } from "react-router-dom";
import mypic from "../assets/Self Photo sq.jpg";
const links = [
  { text: "Home", slug: "/home"},
  { text: "About", slug: "/" },
  { text: "Portfolio", slug: "/portfolio" },
  { text: "Contact", slug: "/contact" },
];

// export default function Nav() {
//   const location = useLocation();
//   return (
//     <nav className="border-b-2 relative flex">
//       <div className="nav-left">
//       <img src={mypic} className="w-16 pt-5 rounded" />
//         <h2 className="text-2xl pl-5 font-semibold absolute bottom-0 left-0">
//           Andrew Mell
//         </h2>
//       </div>
//       <div className="flex justify-end nav-right">
//         <ul className="flex flex-row pr-5">
//           {links.map((link) => (
//             <li
//               className={
//                 location.pathname === link.slug
//                   ? "active px-5 p-2 bg-blue-100 rounded-lg"
//                   : "px-5 p-2 hover:bg-blue-500 rounded-lg"
//               }
//             >
//               <Link to={link.slug}>{link.text}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }
export default function Nav() {
  const location = useLocation();
  return (
    <nav className="border-b-2 relative flex justify-between">
      <div className="nav-left flex items-center">
        <img src={mypic} className="w-16 my-3 ml-5 rounded-full items-center" />
        <h2 className="text-2xl pl-5 font-semibold">
          Andrew Mell
        </h2>
      </div>
      <div className="nav-right flex items-center">
        <ul className="flex flex-row pr-5">
          {links.map((link) => (
            <li
              className={
                location.pathname === link.slug
                  ? "active px-5 p-2 bg-gray-300 rounded-lg"
                  : "px-5 p-2 hover:bg-gray-400 rounded-lg"
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