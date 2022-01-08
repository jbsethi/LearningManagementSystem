import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { DataGrid } from '@mui/x-data-grid'

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';

import {useEffect, useState, useCallback} from 'react'

import PageHeader from '../../components/common/page-header'
import service from './student.service'
import { studentListColumns, Pagination } from './consts'

const CTAButtons = () => (
  <Stack direction="row" alignItems="center" spacing={1}>
    <IconButton color="primary" size="small">
      <PreviewIcon fontSize="small"/>
    </IconButton>
    <IconButton color="success" size="small">
      <EditIcon fontSize="small"/>
    </IconButton>
    <IconButton size="small">
      <DeleteIcon fontSize="small"/>
    </IconButton>
  </Stack>
)

const List = () => {
  const [loading, setLoading] = useState(false)
  const [rows, setRows] = useState([])
  const [pagination, setPagination] = useState(Pagination)

  const columns = [
    ...studentListColumns,
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 130,
      sx: {
        background: 'red',
      },
      cellClassName: 'pinned-cell',
      renderCell: (params) => (
        <CTAButtons />
      ),
    }
  ]

  const loadStudents = useCallback((pageNo) => {
    setLoading(true)
    service.getAllStudents(pageNo)
      .then(({ data, pagination }) => {
        setRows(data)
        setPagination(pagination)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    loadStudents(pagination.pageNo)
  }, [loadStudents, pagination.pageNo])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={1}>
          <PageHeader
            title="Students"
            extras={
              <>
                <Button variant="contained" startIcon={<AddIcon />}>
                  ADD STUDENT
                </Button>
                <Box sx={{
                  marginTop: '15px',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Box sx={{
                    flex: '1'
                  }}>
                    <Autocomplete
                      freeSolo
                      size="small"
                      options={['Jahanzeb', 'Boblee'].map((option) => option)}
                      renderInput={(params) => <TextField {...params} label="Search Students" />}
                    />
                  </Box>
                </Box>
              </>
            }
          >
          </PageHeader>

          <Box sx={{
            height: 'calc(100vh - 240px)'
          }}>
            <DataGrid
              sx={{
                '& .MuiDataGrid-row:hover .pinned-cell': {
                  position: 'sticky',
                  right: '0',
                  background: 'white'
                }
              }}
              rows={rows}
              loading={loading}
              columns={columns}
              hideFooter={true}
              checkboxSelection
            />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default List
