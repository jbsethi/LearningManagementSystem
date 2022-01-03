import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'

import ListContainer from './ListItemContainer'
import CardHeader from './Header'
import ListItem from './ListItem'
import { Button, Typography, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const List = ({ addItem }) => {
  return (
    <Box>
      <CardHeader>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            alignItems: 'center',
            padding: '10px 0'
          }}
        >
          <Typography variant='h6'>
            Notice Board
          </Typography>
          <Button sx={{ display: {xs: 'block', sm: 'none'} }} onClick={addItem} variant="contained" size="small">Add</Button>
          <Box
            sx={{
              display: 'flex',
              gap: '5px',
              width: {
                xs: '100%',
                sm: 'fit-content'
              },
              marginTop: {
                xs: '20px',
                sm: 'auto'
              }
            }}
          >
            <TextField sx={{ width: { xs: '100%', sm: '240px' } }} size="small" variant="outlined" placeholder='Search ...'/>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
      </CardHeader>
      <ListContainer sx={{ display: 'flex', flexDirection: 'column' }}>
        <ListItem />
        <Divider />
        <ListItem />
        <Divider />
        <ListItem />
        <Divider />
        <ListItem />
        <Divider />
        <ListItem />
      </ListContainer>
    </Box>
  )
}

export default List
