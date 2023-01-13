import {
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  Box,
  Divider,
} from "@mui/material";

import logo from "./fylla.png";

const linkArr = ["HOME", "SERVICES", "STUDIO", "CONTACT"];
const secLinkArr = [
  "WORK",
  "WORK SINGLE",
  "BLOG",
  "VLOG SINGLE",
  "SHOP",
  "SHOP SINGLE",
];
const thirdLinkArr = [
  "404 ERROR PAGE",
  "PASSWORD PROTECTED",
  "STYLEGUIDE",
  "LICENSING",
  "CHANGELOG",
];

const blackBtn = {
  color: "white",
  fontSize: "calc(0.1em + 0.6vw)",
  fontFamily: "Roboto Mono",
  bgcolor: "#1e3231",
  p: "0.2rem 1rem",
  borderRadius: "0.3rem",

  "&:hover": {
    color: "#1e3231",
  },
};

const Footer = () => {
  return (
    <Container fixed>
      <Grid container>
        <Grid xs={12} sm={12} md={3.8} lg={3.8}>
          <Box sx={{ display: "flex", m: " 1rem 0" }}>
            <img src={logo} alt="logo" style={{ width: "2rem" }} />
            <Typography sx={{ mt: "0.5rem", fontSize: "calc(1em + 0.85vw)" }}>
              FYLLA
            </Typography>
          </Box>
          <Typography>Main Street. 1</Typography>
          <Typography sx={{ mb: "2rem" }}>222222 London</Typography>

          <Box
            sx={{
              display: "flex",
              mt: {
                xs: "2rem",
                sm: "2rem",
                md: "8rem",
                lg: "12rem",
              },
            }}
          >
            <IconButton
              size="small"
              sx={{
                border: "1px solid #1e3231",
                color: "#1e3231",
              }}
            >
              IN
            </IconButton>
            <IconButton
              size="small"
              sx={{
                border: "1px solid #1e3231",
                color: "#1e3231",
                ml: "1rem",
              }}
            >
              FB
            </IconButton>
            <IconButton
              size="small"
              sx={{
                border: "1px solid #1e3231",
                color: "#1e3231",
                ml: "1rem",
              }}
            >
              LN
            </IconButton>
          </Box>
        </Grid>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            m: "0 2rem ",
            display: {
              xs: "none",
              lg: "inline",
            },
          }}
        />

        <Grid xs={4} md={2.9} lg={2.9} sx={{ mt: "1rem" }}>
          <Typography
            sx={{ fontFamily: "Syne", fontSize: "calc(1em + 0.85vw)" }}
          >
            Pages
          </Typography>
          {linkArr.map((item) => {
            return (
              <Typography
                sx={{
                  m: "1.2rem 0",
                  fontFamily: "Syne",
                  fontSize: "calc(0.1em + 0.6vw)",
                }}
              >
                {item}
              </Typography>
            );
          })}
          <Button sx={blackBtn}>MORE TEMPLATES</Button>
        </Grid>

        <Grid xs={4} md={2.6} lg={2.6} sx={{ mt: "1rem" }}>
          <Typography
            sx={{ fontFamily: "Syne", fontSize: "calc(1em + 0.85vw)" }}
          >
            CSM
          </Typography>
          {secLinkArr.map((item) => {
            return (
              <Typography
                sx={{
                  m: "1.2rem 0",
                  fontFamily: "Syne",
                  fontSize: "calc(0.1em + 0.6vw)",
                }}
              >
                {item}
              </Typography>
            );
          })}
        </Grid>

        <Grid xs={4} md={2} lg={2} sx={{ mt: "1rem" }}>
          <Typography
            sx={{ fontFamily: "Syne", fontSize: "calc(1em + 0.85vw)" }}
          >
            Utility Pages
          </Typography>
          {thirdLinkArr.map((item) => {
            return (
              <Typography
                sx={{
                  m: "1.2rem 0",
                  fontFamily: "Syne",
                  fontSize: "calc(0.1em + 0.6vw)",
                }}
              >
                {item}
              </Typography>
            );
          })}
        </Grid>
      </Grid>
      <Divider sx={{ my: 0.5, mt: "2rem", mb: "4rem" }} />

      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "2rem" }}
      >
        <Typography sx={{ fontFamily: "Syne", mt: "0.25rem" }}>
          © 2022 Made by Pawel Gola. Powered by Webflow.
        </Typography>
        <Box>
          <Button sx={{ color: "black", fontFamily: "Syne" }}>PRYVACY</Button>
          <Button sx={{ color: "black", fontFamily: "Syne" }}>IMPRINT</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
