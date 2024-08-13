"use client"
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import {
  Box,
  IconButton,
  Paper,
  Typography
} from '@mui/material';
import OwnersTable from './components/Table';

const ownerData = [
  { no: '01', author: 'Harry', owner: 'Nardos T', category: 'Fiction', bookName: 'Drerto Gada', status: true },
  { no: '01', author: 'Harry', owner: 'Nardos T', category: 'Fiction', bookName: 'Drerto Gada', status: true },
  { no: '01', author: 'Harry', owner: 'Nardos T', category: 'Fiction', bookName: 'Drerto Gada', status: true },
  { no: '01', author: 'Harry', owner: 'Nardos T', category: 'Fiction', bookName: 'Drerto Gada', status: true },
  { no: '01', author: 'Harry', owner: 'Nardos T', category: 'Fiction', bookName: 'Drerto Gada', status: true },
  // Add more rows as needed
];



const ListOfOwner = () => {
  return (
    <Paper sx={{ width: '100%', overflow: 'auto', boxShadow: 3, p: 4, mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          List of Owner
        </Typography>
        <Box>
          <IconButton size="small"><SearchIcon /></IconButton>
          <IconButton size="small"><ViewWeekIcon /></IconButton>
          <IconButton size="small"><ViewStreamIcon /></IconButton>
          <IconButton size="small"><FilterListIcon /></IconButton>
        </Box>
      </Box>
      <OwnersTable ownerData={ownerData} />
    </Paper>
  );
};

export default ListOfOwner;
