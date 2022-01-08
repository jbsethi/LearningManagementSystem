import { styled } from '@mui/material'
import Box from '@mui/material/Box'

const ListContainer = styled(Box)(() => ({
  height: 'calc(100vh - 195px)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto'
}));

export default ListContainer