"use client"
import CheckIcon from '@mui/icons-material/Check';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import {
  Avatar,
  Box,
  FormControlLabel,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import CustomSwitch from './Switch';

const tableData = [
  {
    no: '01', author: 'Harry', owner: 'Nardos T', category: 'Fiction', bookName: 'Drerto Gada', status: true,
    component:
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "15px", backgroundColor: "#90ff9066", height: "38px", width: "187px" }}>
        <CheckIcon sx={{ color: '#008000' }} />
        <FormControlLabel
          control={<CustomSwitch />}
          label="Active"
          labelPlacement="start"
          color='#008000'
          sx={{ color: '#008000' }}
        />
      </Box>
  },
  {
    no: '01', author: 'Harry', owner: 'Nardos T', category: 'Fiction', bookName: 'Drerto Gada', status: true, component: <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "15px", backgroundColor: "#90ff9066", height: "38px", width: "187px" }}>
      <CheckIcon sx={{ color: '#008000' }} />
      <FormControlLabel
        control={<CustomSwitch />}
        label="Active"
        labelPlacement="start"
        color='#008000'
        sx={{ color: '#008000' }}
      />
    </Box>
  },
  {
    no: '01', author: 'Harry', owner: 'Nardos T', category: 'Fiction', bookName: 'Drerto Gada', status: true, component: <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "15px", backgroundColor: "#90ff9066", height: "38px", width: "187px" }}>
      <CheckIcon sx={{ color: '#008000' }} />
      <FormControlLabel
        control={<CustomSwitch />}
        label="Active"
        labelPlacement="start"
        color='#008000'
        sx={{ color: '#008000' }}
      />
    </Box>
  },
  {
    no: '01', author: 'Harry', owner: 'Nardos T', category: 'Fiction', bookName: 'Drerto Gada', status: true, component: <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "15px", backgroundColor: "#90ff9066", height: "38px", width: "187px" }}>
      <CheckIcon sx={{ color: '#008000' }} />
      <FormControlLabel
        control={<CustomSwitch />}
        label="Active"
        labelPlacement="start"
        color='#008000'
        sx={{ color: '#008000' }}
      />
    </Box>
  },
  {
    no: '01', author: 'Harry', owner: 'Nardos T', category: 'Fiction', bookName: 'Drerto Gada', status: true, component: <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "15px", backgroundColor: "#90ff9066", height: "38px", width: "187px" }}>
      <CheckIcon sx={{ color: '#008000' }} />
      <FormControlLabel
        control={<CustomSwitch />}
        label="Active"
        labelPlacement="start"
        color='#008000'
        sx={{ color: '#008000' }}
      />
    </Box>
  },

];

const tableHead = ['No.', "Author", "Owner", "Category", "Book Name", "Status"]
const tableTitle = "List of Owner"
const CustomTable = () => {
  return (
    <Paper sx={{ width: '100%', overflow: 'auto', boxShadow: 3, p: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {tableTitle}
        </Typography>
        <Box >
          <IconButton size="small"><SearchIcon /></IconButton>
          <IconButton size="small"><ViewWeekIcon /></IconButton>
          <IconButton size="small"><ViewStreamIcon /></IconButton>
          <IconButton size="small"><FilterListIcon /></IconButton>
        </Box>
      </Box>
      <TableContainer sx={{ maxHeight: 440, }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>

              {tableHead.map((head: string) =>
                <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
                  {head}
                </TableCell>
              )}

            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow hover key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.author}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src="/img.jpg" sx={{ width: 24, height: 24, mr: 1 }} />
                    {row.owner}
                  </Box>
                </TableCell>
                <TableCell sx={{ color: 'text.secondary' }}>{row.category}</TableCell>
                <TableCell>{row.bookName}</TableCell>
                <TableCell>
                  {row.component}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CustomTable;
