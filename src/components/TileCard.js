import { Link } from 'react-router-dom';

const TileCard = ({ title, description, link }) => {
  return (
    <div className="bg-slate-200 w-full h-full max-w-80 max-h-60 p-5 m-5 rounded-lg">
      <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default TileCard;
