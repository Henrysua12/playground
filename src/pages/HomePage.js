import TileCard from "../components/TileCard";
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StyledTileCard from "../components/StyledCardComponent";
export const HomePage = () => {
  return (
    <div className="homepage">
        
      <h1>Welcome to the React Playground</h1>
      <div className="flex flex-wrap bg-slate-300">
      <StyledTileCard
          title="State Management"
          description="Learning how to use states effectively in this test i attempt to"
          link="/test"
        />
        <StyledTileCard
          title="Explore Crud"
          description="In this module we will be practicing Crud, basic insert and delete on states eventually we will tie to a backend"
          link="/basicCrud"
        />
        <StyledTileCard
          title="Effect Playground"
          description="Learn about side effects with useEffect."
          link="/"
        />
        <StyledTileCard
          title="Context Playground"
          description="Practice using React Context to share state."
          link="/"
        />
        <StyledTileCard
          title="Context Playground"
          description="Practice using React Context to share state."
          link="/"
        />
        <StyledTileCard
          title="Context Playground"
          description="Practice using React Context to share state."
          link="/"
        />
        <StyledTileCard
          title="Context Playground"
          description="Practice using React Context to share state."
          link="/"
        />
      </div>
      {/* Add more cards as needed */}
    </div>
  );
};
