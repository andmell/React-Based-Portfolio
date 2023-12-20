import Card from "../components/Card";
import { projects } from "../utils/Projects"


export default function PortfolioPage() {
  return (
    <div id='body'>
      <h2 className="text-center text-3xl text-white">Projects</h2>
      <div 
      // className='grid grid-cols-3 border'
      >
        <ul>
        {projects.map((project, index) => {
          return <Card project={project} key={index}/>
        })}
        </ul>
      </div>
    </div>
  );
}
