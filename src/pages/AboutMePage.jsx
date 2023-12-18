import {skills} from '../utils/Skills';
import { Link } from "react-router-dom";
import './aboutmepage.css';


export default function AboutMePage() {
  return (
    <div className="main-container text-center" id="body">
      <h3 className="text-6xl pt-5 text-white pb-10">About me</h3>
      <div className="grid grid-cols-8">
        <div className="about-me col-start-2 col-end-5 text-left text-white">
          <h4 className="text-4xl pb-5">Here's a little blurb</h4>
          <p>
            I'm a newly graduated full stack web developer interested in creating intuitive and responsive web applications.
            After completing a full stack web development bootcamp at Washington University in St. Louis, 
            I'm looking to join a team of developers to create amazing web applications. <Link to="/portfolio"><span className="animate-pulse">Take a look at what I've already done!</span></Link>
          </p>
          <p>
            I'm currently working with the MERN stack, but I'm always excited to learn new technologies and expand my skillset. As of right now,
            I'm brushing up on my React skills and learning TypeScript. In the future, I'm planning on learning more on Python, Angular, and AWS.
          </p>
          <p>
            Outside of coding, I enjoy gardening, playing video games, and spending time with my friends and family. As an ex-horticulturist,
            I'm very familiar with tenaciously working towards a goal in adverse, stressful conditions. I'm very excited to express that same tenacity not only 
            in horticulture, but in web development as well. I'm looking forward to working with you!
          </p>
        </div>
        <div className="skills col-start-6 col-span-2 text-left text-white">
          <h4 className="text-4xl pb-5">My Skills</h4>
          <ul className="flex flex-wrap">
            {skills.map((skill, index) => (
              <li key={index}
              className="rounded px-5 py-1 m-2 bg-gray-700 skillBox"
              >{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
