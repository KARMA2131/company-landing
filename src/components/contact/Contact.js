import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import img1 from "./icons-09.png";

const blackBtn = {
  color: "white",
  fontSize: "1rem",
  fontFamily: "Roboto Mono",
  bgcolor: "#1e3231",
  // mt: '4rem',
  mt: {
    xs: "2rem",
    sm: "2rem",
    md: "2rem",
    lg: "15rem",
  },

  p: "0.2rem 2rem",
  borderRadius: "0.3rem",

  "&:hover": {
    color: "#1e3231",
  },
};

const Contact = () => {
  return (
    <Container fixed>
      <Grid container sx={{ display: "flex", mb: "4rem" }}>
        <Grid xs={12} sm={12} md={12} lg={7.9}>
          <Typography sx={{ m: " 1rem 0" }}> CONTACT</Typography>

          <Typography
            sx={{
              fontFamily: "Syne",
              fontSize: "calc(2.5em + 1vw)",
              lineHeight: "4rem",
            }}
          >
            LET`S BRING YOUR
            <br />
            BRAND TO THE NEXT
            <br />
            LEVEL
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "inline" },
            }}
          >
            <img
              src={img1}
              alt="img"
              style={{
                width: "6rem",
                marginTop: "4rem",
              }}
            />
          </Box>
        </Grid>

        <Grid></Grid>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            mr: "2rem",
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "inline",
            },
          }}
        />

        <Grid xs={12} sm={12} md={10} lg={3.7}>
          <Typography sx={{ fontFamily: "Syne", fontSize: "1.1rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            minima. Cumque ratione, molestiae placeat quod dolorem iusto,
            numquam doloribus eos eum doloremque, in facere sint vitae ipsum
            modi tempore provident.
          </Typography>
          <Button sx={blackBtn}>GET IN TOUCH</Button>
        </Grid>
      </Grid>
      <Divider sx={{ my: 0.5, mt: "4rem", mb: "4rem" }} />
    </Container>
  );
};

export default Contact;
