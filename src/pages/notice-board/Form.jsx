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
          Create A Notice
        </Typography>
      </CardHeader>
      <Box sx={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <FormControl fullWidth variant="standard">
            <InputLabel shrink htmlFor="title">Title</InputLabel>
            <Input id="title" />
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth variant="standard">
            <InputLabel shrink htmlFor="description">Description</InputLabel>
            <Input id="description" multiline maxRows={4} />
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth variant="standard">
            <InputLabel shrink htmlFor="postedBy">Posted by</InputLabel>
            <Select id="postedBy">
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
            <InputLabel shrink htmlFor="description">Date</InputLabel>
            <Input id="date" type="date" />
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
