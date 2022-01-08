import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import { grey } from '@mui/material/colors'; 

const CardHeader = ({ children }) => {
  return (
    <Toolbar sx={{
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: `1px solid ${grey[400]}`
    }}>
      <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
        {children}
      </Typography>
    </Toolbar>
  )
}

export default CardHeader
