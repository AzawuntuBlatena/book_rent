"use client";
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h5" component="h1" gutterBottom color="#525256">
        This Month Statistics
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {formattedTime}
      </Typography>
    </Box>
  );
};

export default Header;
