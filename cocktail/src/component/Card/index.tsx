import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { CocktailProps } from '@/types/types.ts';

export default function DrinkingCard({name,category,instructions,image,alcoholic}: CocktailProps) {
  return (
    <Card sx={{ maxWidth: "md"}}>
      <Typography gutterBottom variant="h5" component="div">
         {name} ({alcoholic})
      </Typography>
      <CardMedia
        sx={{ height: 400 }}
        image={image}
        title={category}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {instructions}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
