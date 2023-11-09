import Card from "../components/Card";

const projects = [
  {
    title: 'Stock Flocker',
    text: 'A basic social media site built around stock speculation.',
    linkGit: 'gggg',
    linkDepl: '',
    imgSrc: 'https://picsum.photos/600/400'
  },
  {
    title: 'Mongo Social Media API',
    text: 'A social media API built using a MongoDB backend.',
    linkGit: '',
    linkDepl: '',
    imgSrc: 'https://picsum.photos/600/400'
  },
  {
    title: 'Movie Generator',
    text: 'A web application for generating a movie to watch based on user input.',
    linkGit: '',
    linkDepl: '',
    imgSrc: 'https://picsum.photos/600/400'
  },
  {
    title: 'keysmcashs',
    text: 'timeotuTUT',
    linkGit: '',
    linkDepl: '',
    imgSrc: 'https://picsum.photos/600/400'
  },
  {
    title: 'keysmcashs',
    text: 'timeotuTUT',
    linkGit: '',
    linkDepl: '',
    imgSrc: 'https://picsum.photos/600/400'
  },
  {
    title: 'keysmcashs',
    text: 'timeotuTUT',
    linkGit: '',
    linkDepl: '',
    imgSrc: 'https://picsum.photos/600/400'
  },
]
export default function PortfolioPage() {
  return (
    <div>
      <h2 className="text-center text-3xl">Projects</h2>
      <div class='grid grid-cols-3'>
        {projects.map((project) => {
          return <Card project={project}/>
        })}
      </div>
    </div>
  );
}
