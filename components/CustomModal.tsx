import { Box, Modal } from '@mui/material';

interface UserModalProps {
  user: any;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function UserModal({ user, onClose, children }: UserModalProps) {
  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby="user-modal-title"
      aria-describedby="user-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
}
