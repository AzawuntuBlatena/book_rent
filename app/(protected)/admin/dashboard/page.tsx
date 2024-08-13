import AvailableBooksCard from '@/components/AvailabeBooks';
import EarningSummaryCard from '@/components/EarningSummary';
import IncomeCard from '@/components/IncomeCard';
import LiveBookStatus from '@/components/LivebookStatus';
import PageContainer from '@/components/PageContainer';
import Header from '@/components/StatsHeader';
import { Box, Grid } from '@mui/material';

const Dashboard = () => {
  const income = {
    amount: 9460.00,
    currency: 'ETB',
    percentage: -1.5,
    lastMonth: 25658.00,
  };

  const bookCategories = [
    { label: 'Fiction', value: 54, color: '#1976d2' },
    { label: 'Self Help', value: 20, color: '#4caf50' },
    { label: 'Business', value: 26, color: '#f44336' },
  ];

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Grid container spacing={3} sx={{ height: "120%" }}>
        <Grid item xs={12} lg={4} sx={{ height: '100%', }}>
          <Box sx={{
            backgroundColor: "white",
            height: "100%",
            p: [4, 2, 4, 2],
            display: 'flex',
            flexDirection: "column",
            gap: 4,
            borderRadius: "15px"
          }}>
            <Header
            />

            <IncomeCard />

            <AvailableBooksCard />

          </Box>
        </Grid>
        <Grid item spacing={2} xs={12} lg={8}>
          <LiveBookStatus />

          <EarningSummaryCard />
        </Grid>
        <Grid item xs={12} lg={8}>
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default Dashboard;

// <Box>




// </Box>
