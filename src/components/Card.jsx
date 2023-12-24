import "./card.css";

export default function MediaCard({ project }) {
  return (
    <div className="grid grid-cols-6 rounded pb-10 mx-10">
      <div className="col-start-1 col-span-2 flex items-top justify-end">
        <img className="rounded-xl card-img fadeInAnimation" src={project.imgSrc} />
      </div>
      <div className="col-start-3 col-span-3  items-center ml-5">
        <h4 className="text-left text-3xl font-bold">{project.title}</h4>
        <div className="description">
          <p>{project.text}</p>
        </div>
        <div className="skillsUsed ">
          <p>Skills Used:</p>
          <ul className="flex flex-wrap">
            {project.skills.map((skill, index) => (
              <li
                key={index}
                className="rounded px-3 py-1 my-1 mx-2 bg-gray-700 skillBox"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="direct-buttons flex justify-start items-start">
          <button className="px-10 p-2 my-10 mr-10 bg-yellow-300 hover:bg-yellow-500 font-bold rounded text-xl portfolioButton">
            <a href={project.linkGit}>To GitHub</a>
          </button>

          {project.linkDepl ? (
            <button className="px-10 p-2 my-10 bg-yellow-300 hover:bg-yellow-500 font-bold rounded text-xl portfolioButton">
              <a href={project.linkDepl}>To Deployed Site</a>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
