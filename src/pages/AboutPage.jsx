import { socials } from '../utils/Socials';
import { Link } from "react-router-dom";
import './aboutpage.css';

export default function AboutPage() {
  return (
    <div className="">
      <div className="grid grid-cols-7 content-center" id="body">
        <div className="col-span-1 col-start-1 col-end-2 text-white">
        <ul className='border-2 border-slate-900 rounded float-left bg-slate-900'>
                {socials.map((social) => (
                    <a href={social.link}><li className="p-2"><img className="w-12 h-12 hover:animate-pulse" src={social.icon}/></li></a>
                ))}
            </ul>
        </div>
        <div className="col-span-5 col-start-2 text-center">
          <h3 className="text-6xl text-white headerFadeIn">Hi there, I'm Andrew 👋</h3>
          <p className="pt-5 text-white text-xl pFadeIn">
            A full stack developer with a passion for learning and creating,
            focused on building responsive, accessible, and intuitive user
            experiences.
          </p>
          <Link to='/portfolio'>
          <button className="px-10 p-2 my-10 bg-yellow-300 hover:bg-yellow-500 font-bold hover:animate-pulse rounded text-xl">
            Projects
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
