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
      <h2 className="text-center text-3xl">Projects</h2>
      <div class='flex flex-row justify-center'>
        {projects.map((project) => {
          return <Card project={project}/>
        })}
      </div>
    </div>
  );
}
