import facebook from "../assets/facebookicon.png";
import github from "../assets/github-logo.png";
import linkedin from "../assets/linkedinicon.png";

const socials = [
    { link: "https://github.com/andmell", icon: github },
    { link: "https://www.linkedin.com/in/andrew-mell-959b5815b/", icon: linkedin },
    { link: "https://www.facebook.com/profile.php?id=61552733397767&mibextid=LQQJ4d", icon: facebook },
  ];

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
          <h3 className="text-6xl text-white ">Hi there, I'm Andrew 👋</h3>
          <p className="pt-5 text-white text-xl">
            A full stack developer with a passion for learning and creating,
            focused on building responsive, accessible, and intuitive user
            experiences.
          </p>
          <button className="px-10 p-2 my-10 bg-yellow-300 hover:bg-yellow-500 font-bold hover:animate-pulse rounded text-xl">
            Projects
          </button>
        </div>
      </div>
    </div>
  );
}
