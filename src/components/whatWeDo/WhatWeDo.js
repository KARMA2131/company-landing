import { Container, Grid, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";
import img1 from "./img/icons-07.png";
import img2 from "./img/icons-08.png";
import img3 from "./img/icons-09.png";
import img4 from "./img/icons-10.png";

const WhatWeDo = () => {
  return (
    <Container fixed sx={{mt:'4rem'}}>
      <Grid container>
        <Grid xs={3}>
          <Typography
            sx={{ fontFamily: "Syne", fontSize: "calc(0.7em + 1vw)" }}
          >
            WHAT WE DO
          </Typography>
        </Grid>

        <Grid container xs={12} sm={12} md={9}>
          <Grid
            item
            xs={12}
            sm={12}
            md={5.5}
            sx={{ display: "flex", mt: "2rem" }}
          >
            <img
              src={img1}
              alt="img1"
              style={{ width: "4rem", height: "4rem" }}
            />

            <Box sx={{ p: " 0 1rem" }}>
              <Typography
                sx={{ fontFamily: "Syne", fontSize: "calc(0.4em + 1vw)" }}
              >
                BRANDING
              </Typography>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                qui cum.
              </Typography>
            </Box>
          </Grid>

          <Divider
            sx={{
              display: { xs: "none", sx: "none", md: "inline" },
              height: "6rem",
              mr: "1rem",
              mt: "2rem",
            }}
            orientation="vertical"
            variant="middle"
          />

          <Grid
            item
            xs={12}
            sm={12}
            md={5.5}
            sx={{ display: "flex", mt: "2rem" }}
          >
            <img
              src={img2}
              alt="img2"
              style={{ width: "4rem", height: "4rem" }}
            />

            <Box sx={{ p: " 0 1rem" }}>
              <Typography
                sx={{ fontFamily: "Syne", fontSize: "calc(0.4em + 1vw)" }}
              >
                DESIGN
              </Typography>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                qui cum.
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={5.5}
            sx={{ display: "flex", mt: "2rem" }}
          >
            <img
              src={img3}
              alt="img3"
              style={{ width: "4rem", height: "4rem" }}
            />

            <Box sx={{ p: " 0 1rem" }}>
              <Typography
                sx={{ fontFamily: "Syne", fontSize: "calc(0.4em + 1vw)" }}
              >
                VIDEO
              </Typography>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                qui cum.
              </Typography>
            </Box>
          </Grid>

          <Divider
            sx={{
              display: { xs: "none", sx: "none", md: "inline" },
              height: "6rem",
              mr: "1rem",
              mt: "2rem",
            }}
            orientation="vertical"
            variant="middle"
          />

          <Grid
            item
            xs={12}
            sm={12}
            md={5.5}
            sx={{ display: "flex", mt: "2rem" }}
          >
            <img
              src={img4}
              alt="img4"
              style={{ width: "4rem", height: "4rem" }}
            />

            <Box sx={{ p: " 0 1rem" }}>
              <Typography
                sx={{ fontFamily: "Syne", fontSize: "calc(0.4em + 1vw)" }}
              >
                CONTENT
              </Typography>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                qui cum.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhatWeDo;
