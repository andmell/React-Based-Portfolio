// export default function Card({project}) {
//   return (
//     <div className="cardBox">
//       <img className="cardImg" src={project.imgSrc} />
//       <h2>{project.title}</h2>
//       <p>{project.text}</p>
//       <button>To GitHub</button>
//       <button>To Deployed Site</button>
//     </div>
//   );
// }
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({project}) {
  return (
    <div className="p-10 hover:animate-pulse">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://picsum.photos/600/400"
        title="random photo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Github</Button>
        <Button size="small">Deployed Site</Button>
      </CardActions>
    </Card>
    </div>
  );
}