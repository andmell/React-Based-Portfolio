export default function Card({project}) {
  return (
    <div className="cardBox">
      <img className="cardImg" src={project.imgSrc} />
      <h2>{project.title}</h2>
      <p>{project.text}</p>
      <button>To GitHub</button>
      <button>To Deployed Site</button>
    </div>
  );
}
