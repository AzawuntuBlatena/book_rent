import CustomModal from '@/components/CustomModal';
import CustomSwitch from '@/components/Switch';
import { listOfOwnersTableHead } from '@/constants';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Avatar,
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { useState } from 'react';

export default function OwnersTable({ ownerData }: { ownerData: any[] }) {
  const [selectedUser, setSelectedUser] = useState(null);


  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return <TableContainer sx={{ maxHeight: 440 }}>
    <Table stickyHeader aria-label="sticky table">
      <TableHead>
        <TableRow>
          {listOfOwnersTableHead.map((head,index: number) =>
            <TableCell key={index} sx={{ fontWeight: 'bold', color: 'text.secondary' }}>{head}</TableCell>
          )}
        </TableRow>
      </TableHead>
      <TableBody>
        {ownerData.map((row: any, index: number) => (
          <TableRow hover key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{row.author}</TableCell>
            <TableCell>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src="/path-to-nardos-image.jpg" sx={{ width: 24, height: 24, mr: 1 }} />
                {row.owner}
              </Box>
            </TableCell>
            <TableCell sx={{ color: 'text.secondary' }}>{row.category}</TableCell>
            <TableCell>{row.bookName}</TableCell>
            <TableCell>
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

            </TableCell>

            <TableCell>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton aria-label="view" size='large' onClick={() => handleUserClick(row)} >
                  <VisibilityIcon fontSize='large' sx={{ cursor: "pointer" }} />
                </IconButton>
                <IconButton aria-label="delete" size="large">
                  <DeleteIcon sx={{ color: "red" }} fontSize='large' />
                </IconButton>
              </Box>
            </TableCell>

            <TableCell>
              <Button variant="contained" sx={{ backgroundColor: "#00ABFF" }}>Approved</Button>
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
      {selectedUser && <CustomModal user={selectedUser} onClose={() => setSelectedUser(null)} />}
    </Table>
  </TableContainer>
}
