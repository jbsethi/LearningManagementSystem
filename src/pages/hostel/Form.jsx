import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import CardHeader from './Header'
import { Typography } from '@mui/material'

const Form = ({ cancel }) => {
  return (
    <Box>
      <CardHeader>
        <Typography variant="h6">
          Add New Room
        </Typography>
      </CardHeader>
      <Box sx={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <FormControl fullWidth variant="standard">
            <InputLabel shrink htmlFor="title">Hostel Name</InputLabel>
            <Input id="title" />
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth variant="standard">
            <InputLabel shrink htmlFor="roomNo">Room No</InputLabel>
            <Input id="roomNo" />
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth variant="standard">
            <InputLabel shrink htmlFor="roomType">Room Type</InputLabel>
            <Select id="roomType">
              {[{ label: 'aaa', value: 'aaa' }].map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth variant="standard">
            <InputLabel shrink htmlFor="noOfBed">No Of Bed</InputLabel>
            <Input id="noOfBed" type="number" />
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth variant="standard">
            <InputLabel shrink htmlFor="costPerBed">Cost Per Bed</InputLabel>
            <Input id="costPerBed" type="number" />
          </FormControl>
        </div>
        <Stack sx={{ marginTop: '10px' }} spacing={2} direction="row">
          <Button variant="contained">Confirm</Button>
          <Button color="error" variant="outlined" onClick={cancel}>Cancel</Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default Form
