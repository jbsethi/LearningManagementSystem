import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { Button, Typography, MenuItem, IconButton } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';

import ListContainer from './ListItemContainer'
import CardHeader from './Header'

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: 'Hostel Name', width: 140 },
  { field: 'roomNo', headerName: 'Room No', width: 180 },
  { field: 'roomType', headerName: 'Room Type', width: 100 },
  { field: 'noOfBed', headerName: 'No of Bed', type: 'number', width: 140 },
  { field: 'costPerBed', headerName: 'Cost Per Bed', type: 'number', width: 140 },
];

const rows = [
  { id: 1, name: 'Boys 101', roomNo: 'HT3001', roomType: 'Big', noOfBed: 20, costPerBed: 35 },
  { id: 2, name: 'Boys 101', roomNo: 'HT3001', roomType: 'Big', noOfBed: 20, costPerBed: 35 },
  { id: 3, name: 'Boys 101', roomNo: 'HT3001', roomType: 'Big', noOfBed: 20, costPerBed: 35 },
  { id: 4, name: 'Boys 101', roomNo: 'HT3001', roomType: 'Big', noOfBed: 20, costPerBed: 35 },
  { id: 5, name: 'Boys 101', roomNo: 'HT3001', roomType: 'Big', noOfBed: 20, costPerBed: 35 },
  { id: 6, name: 'Boys 101', roomNo: 'HT3001', roomType: 'Big', noOfBed: 20, costPerBed: 35 },
  { id: 7, name: 'Boys 101', roomNo: 'HT3001', roomType: 'Big', noOfBed: 20, costPerBed: 35 },
  { id: 8, name: 'Boys 101', roomNo: 'HT3001', roomType: 'Big', noOfBed: 20, costPerBed: 35 },
  { id: 9, name: 'Boys 101', roomNo: 'HT3001', roomType: 'Big', noOfBed: 20, costPerBed: 35 },
];

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
            Hostel Room List
          </Typography>
          <Button sx={{ display: {xs: 'block', sm: 'none'} }} onClick={addItem} variant="contained" size="small">Add</Button>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
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
            <TextField sx={{ width: { xs: '100%', sm: '140px' } }} size="small" variant="outlined" placeholder='Hostel Name'/>
            <Select displayEmpty value="" size="small" sx={{ width: { xs: 'calc(50% - 2.5px)', sm: '140px' } }} placeholder='Select Room'>
              <MenuItem value=""><Typography type="span" sx={{ color: `${grey[500]}` }} >Select Room</Typography></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <TextField sx={{ width: { xs: 'calc(50% - 2.5px)', sm: '140px' } }} size="small" variant="outlined" placeholder='Beds' type="number" />
            <IconButton sx={{ display: { xs: 'none', sm: 'inline-flex'} }}>
              <SearchIcon />
            </IconButton>
            <Button sx={{ display: { xs: 'inline-flex', sm: 'none'} }} startIcon={<SearchIcon />} variant="contained" size="small" fullWidth>
              Search
            </Button>
          </Box>
        </Box>
      </CardHeader>
      <ListContainer sx={{ display: 'flex', flexDirection: 'column' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableExtendRowFullWidth={false}
        />
      </ListContainer>
    </Box>
  )
}

export default List
