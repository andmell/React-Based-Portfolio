import Card from "../components/Card";

const projects = [
  {
    title: 'Stock Flocker',
    text: 'A basic social media site built around stock speculation.',
    linkGit: 'https://github.com/wyattbarger/stock-flocker',
    linkDepl: '',
    imgSrc: 'https://picsum.photos/600/400'
  },
  {
    title: 'Mongo Social Media API',
    text: 'A back-end social media API built using MongoDB.',
    linkGit: 'https://github.com/andmell/Mongo-Social-Media-API',
    linkDepl: 'https://shrouded-coast-42223-a6c05e1c3810.herokuapp.com/',
    imgSrc: 'https://picsum.photos/600/400'
  },
  {
    title: 'Movie Generator',
    text: 'A web application for generating a movie to watch based on user input.',
    linkGit: 'https://github.com/andmell/movie-generator',
    linkDepl: 'https://andmell.github.io/movie-generator/',
    imgSrc: 'https://picsum.photos/600/400'
  },
  {
    title: 'Note Taker App',
    text: 'A simple full stack application used for taking notes.',
    linkGit: 'https://github.com/andmell/Note-Taker-App',
    linkDepl: 'https://infinite-coast-35685-4c182fb8e923.herokuapp.com/',
    imgSrc: 'https://picsum.photos/600/400'
  },
  {
    title: 'Weather Forecast App',
    text: 'A front-end application that uses APIs to provide weather information.',
    linkGit: 'https://github.com/andmell/weather-forecast-app',
    linkDepl: 'https://andmell.github.io/weather-forecast-app/',
    imgSrc: 'https://picsum.photos/600/400'
  },
  {
    title: 'Workday Scheduler',
    text: 'A front-end application that aids in scheduling appointments in a 9 to 5 workday.',
    linkGit: 'https://github.com/andmell/work-day-scheduler',
    linkDepl: 'https://andmell.github.io/work-day-scheduler/',
    imgSrc: 'https://picsum.photos/600/400'
  },
]
export default function PortfolioPage() {
  return (
    <div id='body'>
      <h2 className="text-center text-3xl text-white">Projects</h2>
      <div class='grid grid-cols-3'>
        {projects.map((project) => {
          return <Card project={project}/>
        })}
      </div>
    </div>
  );
}
