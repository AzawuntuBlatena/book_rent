"use client";
import { useUser } from '@/context/AuthContext';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

const bookData = [
  { no: '01', bookNo: '6465', owner: 'Nardos T', status: 'Rented', price: '40 Birr', avatarSrc: '/path-to-nardos-image.jpg' },
  { no: '01', bookNo: '6465', owner: 'Nardos T', status: 'Rented', price: '40 Birr', avatarSrc: '/path-to-nardos-image.jpg' },
  { no: '01', bookNo: '6465', owner: 'Nardos T', status: 'Rented', price: '40 Birr', avatarSrc: '/path-to-nardos-image.jpg' },
  { no: '02', bookNo: '5665', owner: 'Harry M', status: 'Free', price: '0.0 Birr', avatarSrc: '/path-to-harry-image.jpg' },
  { no: '02', bookNo: '5665', owner: 'Harry M', status: 'Free', price: '0.0 Birr', avatarSrc: '/path-to-harry-image.jpg' },
  { no: '03', bookNo: '1755', owner: 'Tesfu N', status: 'Free', price: '0.0 Birr', avatarSrc: '/path-to-tesfu-image.jpg' },
];

const LiveBookStatus = () => {
  const { user } = useUser();
  return (
    <Paper sx={{ width: '100%', overflow: 'auto', boxShadow: 3, p: 4, mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" component="div">
          Live Book Status
        </Typography>
        <Box>
          <IconButton size="small"><SearchIcon /></IconButton>
          <IconButton size="small"><ViewWeekIcon /></IconButton>
          <IconButton size="small"><ViewStreamIcon /></IconButton>
          <IconButton size="small"><FilterListIcon /></IconButton>
        </Box>
      </Box>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary' }}>No.</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary' }}>Book no.</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary' }}>Owner</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary' }}>Price</TableCell>
              {user?.role === "OWNER" && <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary' }}>Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {bookData.map((row, index) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Box sx={{ bgcolor: 'grey.100', borderRadius: 1, px: 1, py: 0.5, display: 'inline-block' }}>
                    {row.bookNo}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={row.avatarSrc} sx={{ width: 24, height: 24, mr: 1 }} />
                    {row.owner}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Radio
                      checked
                      sx={{
                        color: row.status === "Rented" ? "#FF0000" : "#00ABFF",
                        '&.Mui-checked': {
                          color: row.status === "Rented" ? "#FF0000" : "#00ABFF",
                        },
                      }}
                    />
                    {row.status}
                  </Box>
                </TableCell>
                <TableCell>{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default LiveBookStatus;
