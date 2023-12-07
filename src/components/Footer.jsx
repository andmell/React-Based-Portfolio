import {socials} from "../utils/Socials";

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
