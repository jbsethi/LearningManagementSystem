import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import { grey } from '@mui/material/colors'

const PageHeader = ({ title, extras }) => {
  return (
    <Toolbar sx={{ borderBottom: `1px solid ${grey[400]}` }}>
      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: '10px 0'
      }}>
        <Typography variant='h6'>
          {title}
        </Typography>
        {
          extras
        }
      </Box>
    </Toolbar>
  )
}

export default PageHeader
