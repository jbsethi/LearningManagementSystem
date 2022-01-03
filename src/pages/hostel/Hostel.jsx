import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

import Form from './Form'
import List from './List'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Hostel = () => {
  const [open, setOpen] = useState(false)

  return (
    <Grid container spacing={2}>
      <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} sm={4}>
        <Paper elevation={1}>
          <Form cancel={() => setOpen(false)}  />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Paper elevation={1}>
          <List addItem={() => setOpen(true)} />
        </Paper>
      </Grid>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={style}>
          <Form cancel={() => setOpen(false)}/>
        </Box>
      </Modal>
    </Grid>
  )
}

export default Hostel
