import React, { useEffect, useState } from "react";

import {
  experimentalStyled,
  useMediaQuery,
  Container,
  Box,
} from "@material-ui/core";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import { TopbarHeight } from "../../assets/global/Theme-variable";
import { useDispatch, useSelector } from "react-redux";

const MainWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  width: "100%",
}));
const PageWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("lg")]: {
    paddingTop: TopbarHeight,
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "64px",
  },
}));

const FullLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [ isLoggedIn, setIsLoggedIn] = useState(false);
  const { isLoggedIn: loggedInGlobal } = useSelector((state) => state.auth);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const navigate = useNavigate();
  
  // Auth?
  useEffect(() => {
    console.log({loggedInGlobal})
    if(!(loggedInGlobal)) {
      navigate('/login', {replace: true});
    }
  }, [loggedInGlobal])

  return loggedInGlobal && (
    <MainWrapper>
      <Header
        sx={{
          paddingLeft: isSidebarOpen && lgUp ? "265px" : "",
          backgroundColor: "#ffffff",
        }}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        toggleMobileSidebar={() => setMobileSidebarOpen(true)}
      />

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)}
      />

      <PageWrapper>
        <Container
          maxWidth={false}
          sx={{
            paddingTop: "20px",
            backgroundColor:"#EDF0F2",
            paddingLeft: isSidebarOpen && lgUp ? "280px!important" : "",
          }}
        >
          <Box style={{
            display: "flex",
            flexDirection: "column"
          }} sx={{ minHeight: "calc(100vh - 170px)"}}>
            <Outlet />
          </Box>
          <Footer />
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
};

export default FullLayout;
