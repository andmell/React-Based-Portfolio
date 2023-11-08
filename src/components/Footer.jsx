
const socials = [
    { link: "https://github.com/andmell", icon: "src/assets/github-logo.png" },
    { link: "https://www.linkedin.com/in/andrew-mell-959b5815b/", icon: "src/assets/linkedinicon.png" },
    { link: "http://www.facebook.com", icon: "src/assets/facebookicon.png" },
  ];

export default function Footer(){
    return (
        <div className='footer'>
            <ul className='flex flex-row justify-center'>
                {socials.map((social) => (
                    // <a href={social.link}><li className="p-2">{social.text}</li></a>
                    <a href={social.link}><li className="p-2"><img className="w-12 h-12" src={social.icon}/></li></a>
                ))}
            </ul>
        </div>
    );
}
