import {skills} from '../utils/Skills';
import './aboutmepage.css';
export default function AboutMePage() {
  return (
    <div className="main-container text-center" id="body">
      <h3 className="text-6xl pt-5 text-white pb-10">About me</h3>
      <div className="grid grid-cols-8">
        <div className="about-me col-start-2 col-end-5 text-left text-white">
          <h4 className="text-4xl pb-5">Here's a little blurb</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="skills col-start-6 col-span-2 text-left text-white">
          <h4 className="text-4xl pb-5">My Skills</h4>
          <ul className="flex flex-wrap">
            {skills.map((skill, index) => (
              <li key={index}
              className="border rounded px-3 m-1"
              >{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
