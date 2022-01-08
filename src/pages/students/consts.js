import Avatar from '@mui/material/Avatar';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export const studentListColumns = [
  { field: 'id', headerName: 'Roll No', width: 80 },
  {
    field: 'photo',
    headerName: 'Photo',
    width: 80,
    sortable: false,
    renderCell: (params) => {
      return (
        <Avatar
          sx={{
            bgcolor: stringToColor(params.row.firstName),
          }}
        >
          {params.row.firstName[0] + params.row.lastName[0]}
        </Avatar>
      )
    }
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 180,
    valueGetter: (params) => (`${params.row.firstName} ${params.row.lastName}`)
  },
  { field: 'parentsName', headerName: 'Parents Name', width: 180 },
  { field: 'gender', headerName: 'Gender', width: 100 },
  { field: 'class', headerName: 'Class', width: 100 },
  { field: 'section', headerName: 'Section', width: 100 },
  { field: 'address', headerName: 'Address', width: 280, sortable: false },
  { field: 'dob', headerName: 'DOB', width: 100 },
  { field: 'mobileNo', headerName: 'Mobile No', width: 120 },
  { field: 'email', headerName: 'Email', width: 150 },
];

export const Pagination = {
  skip: 0,
  limit: 50,
  pageNo: 1,
  totalItemsInLastResponse: null,
}