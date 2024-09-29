import { ListItem, List, ListItemText, ListItemIcon } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const BasicCrud = () => {
  return (
    <div>
      <div>Lets Explore Basic Crud</div>
    <div className="flex items-center justify-center">
      <ListItem className="w-full h-full max-w-80 max-h-60 p-5 m-5 rounded-lg">
        <ListItemText primary="Single-line item" />
        <ListItemIcon>
          <DeleteIcon></DeleteIcon>
        </ListItemIcon>
      </ListItem>
    </div>
    </div>
  );
};

export default BasicCrud;
