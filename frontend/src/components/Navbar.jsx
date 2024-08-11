import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#9c27b0' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          EmployeeApp
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/add">Add</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
