import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { grey } from '@mui/material/colors'; 

const ListItem = () => {
  return (
    <Box sx={{ padding: '25px', '&:hover': { backgroundColor: `${grey[100]}`}, '&:active': {backgroundColor: `${grey[200]}`} }}>
      <Typography variant="caption" component="div">
        16 May, 2017
      </Typography>
      <div>
        <Typography variant="subtitle1" component="span">
          Lara Croft
        </Typography>
        <Typography variant="caption" component="span" sx={{ marginLeft: '5px' }}>
          5 min ago
        </Typography>
      </div>
      <Typography variant="body2" component="div" sx={{ marginTop: '10px' }}>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum
      </Typography>
    </Box>
  )
}

export default ListItem
