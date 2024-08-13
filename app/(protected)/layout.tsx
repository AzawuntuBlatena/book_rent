"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { useUser } from "@/context/AuthContext";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useUser();
  const router = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // useEffect(() => {
  //   if (!loading && !user) {
  //     router.push('/login')
  //   }
  // }, [user, loading, router])

  // if (loading) {
  //   return <Spinner />
  // }

  // if (!user) {
  //   return null
  // }

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        padding: "20px",
        backgroundColor: "#F0F2FF",
        position: "relative",
      }}
    >
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarMenuClick={setMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)}
      />

      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          paddingBottom: "60px",
          flexDirection: "column",
          zIndex: 1,
          backgroundColor: "transparent",
        }}
      >
        <Container
          sx={{
            maxWidth: "1300px !important",
            position: "relative",
          }}
        >
          <Header />

          <Box sx={{ minHeight: "calc(100vh - 170px)", py: 3 }}>{children}</Box>
        </Container>
      </Box>
    </Box>
  );
}
