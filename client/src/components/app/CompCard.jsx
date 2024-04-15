import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const cmpCard = ({ comp }) => {
  const { id, name, lang, framework, paid, price, description } = comp;

  console.log(comp)

  return (
    <Box sx={{ minWidth: 300 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {lang} || {framework}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {paid ? 'Paid' : 'Free'}
          </Typography>
          {paid && <Typography variant="body2">Price: {price}</Typography>}
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Link to={`page/${id}`}>
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};

export default cmpCard;
  