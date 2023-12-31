import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../style/style.css'
import {Link} from 'wouter';


export default function ActionAreaCard(props) {
  return (
    <Link href={props.path}><Card className='card' sx={{
      transition: '.7s',
      m: 5,
      marginBottom: '0',
      border: "1px solid ",
      borderRadius: '15px'}}>
      <CardActionArea  >
        <CardMedia
          component="img"
          height="110"
          image={props.image}
          alt="course image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.level}
            {props.price}
            <br/>
            <span style={{color: '#CF9FFF', fontWeight: '600', fontSize: '1rem', display: 'flex'}}>Read more< ArrowForwardIcon sx={{width: '1.2rem'}}/></span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Link>
  );
}