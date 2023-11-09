import facebook from "../assets/facebookicon.png";
import github from "../assets/github-logo.png";
import linkedin from "../assets/linkedinicon.png";

const socials = [
    { link: "https://github.com/andmell", icon: github },
    { link: "https://www.linkedin.com/in/andrew-mell-959b5815b/", icon: linkedin },
    { link: "https://www.facebook.com/profile.php?id=61552733397767&mibextid=LQQJ4d", icon: facebook },
  ];

export default function Footer(){
    return (
        <div className='footer'>
            <ul className='flex flex-row justify-center'>
                {socials.map((social) => (
                    // <a href={social.link}><li className="p-2">{social.text}</li></a>
                    <a href={social.link}><li className="p-2"><img className="w-12 h-12 hover:animate-pulse" src={social.icon}/></li></a>
                ))}
            </ul>
        </div>
    );
}
