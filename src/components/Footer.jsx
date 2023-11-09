
const socials = [
    { link: "https://github.com/andmell", icon: "src/assets/github-logo.png" },
    { link: "https://www.linkedin.com/in/andrew-mell-959b5815b/", icon: "src/assets/linkedinicon.png" },
    { link: "https://www.facebook.com/profile.php?id=61552733397767&mibextid=LQQJ4d", icon: "src/assets/facebookicon.png" },
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
