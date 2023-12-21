import gamepopimg from '../assets/gamepopimg.png';
import stockflockerimg from '../assets/stockflocker.png';
import mongoPic from '../assets/mongocreateuser (1).png';

export const projects = [
    {
        title: 'Game Pop',
        text: 'A simple full stack game that users can play to determine if a game is rated higer or lower than a comparison game.',
        linkGit: 'https://github.com/wyattbarger/gamepop-over-under',
        linkDepl: 'https://game-pop-0133abbe0985.herokuapp.com/',
        imgSrc: gamepopimg,
        skills: ['React', 'MongoDB', 'Express', 'Node.js', 'GraphQL', 'JWT', 'Bcrypt', 'Apollo', 'Semantic UI']
    },
    {
      title: 'Stock Flocker',
      text: 'A basic social media site built around stock speculation.',
      linkGit: 'https://github.com/wyattbarger/stock-flocker',
      linkDepl: 'https://shrouded-coast-42223-a6c05e1c3810.herokuapp.com/',
      imgSrc: stockflockerimg,
      skills: ['React', 'MongoDB', 'Express', 'Node.js', 'GraphQL', 'JWT', 'Bcrypt', 'Apollo', 'Semantic UI']
    },
    {
      title: 'Mongo Social Media API',
      text: 'A back-end social media API built using MongoDB.',
      linkGit: 'https://github.com/andmell/Mongo-Social-Media-API',
      linkDepl: '',
      imgSrc: mongoPic,
      skills: ['React', 'MongoDB', 'Express', 'Node.js', 'GraphQL', 'JWT', 'Bcrypt', 'Apollo', 'Semantic UI']
    },
];