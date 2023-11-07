import Card from "../components/Card";

const projects = [
  {
    title: 'test1',
    text: 'asdf',
    linkGit: 'gggg',
    linkDepl: '',
    imgSrc: 'https://picsum.photos/600/400'
  },
  {
    title: 'aaa',
    text: 'ohhhh',
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
      <h2>Projects</h2>
      <div class='projectBody'>
        {projects.map((project) => {
          return <Card project={project}/>
        })}
      </div>
    </div>
  );
}
