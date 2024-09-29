import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const StyledCrudCard = ({ title, description, link }) => {
    const navigate = useNavigate();
    const handleNavigationClick = () =>{
        console.log(link)
        navigate(link); // Replace with your target path
    }
  return (
    <Card className="bg-slate-400" sx={{ margin: "8px", maxWidth: 345, bgcolor:"ghostwhite" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick ={handleNavigationClick} size="small">See Code</Button>
      </CardActions>
    </Card>
  );
};

export default StyledCrudCard;
