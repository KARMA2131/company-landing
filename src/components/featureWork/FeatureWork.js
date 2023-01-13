import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Divider,
} from "@mui/material";

import img1 from "./img/work-img(1).jpg";
import img2 from "./img/work-img(2).jpg";
import img3 from "./img/work-img(3).jpg";
import img4 from "./img/work-img(4).jpg";
import img5 from "./img/work-img(5).jpg";

import "./style.css";

const blackBtn = {
  color: "white",
  fontSize: "1rem",
  fontFamily: "Roboto Mono",
  bgcolor: "#1e3231",
  mt: "2rem",
  p: "0.2rem 2rem",
  borderRadius: "0.3rem",

  "&:hover": {
    color: "#1e3231",
  },
};

const hoverBtn = {
  position: "absolute",
  color: "white",
  fontSize: "1rem",
  fontFamily: "Roboto Mono",
  bgcolor: "#1e3231",
  mt: {
    xs: "15rem",
    sm: "25rem",
    md: "35rem",
    lg: "35rem",
  },
  p: "0.2rem 2rem",
  borderRadius: "0.3rem",
  zIndex: "5",

  "&:hover": {
    color: "#1e3231",
    bgcolor: "white",
  },
};

const hoverHoverBtn = {
  position: "absolute",
  color: "white",
  fontSize: "1rem",
  fontFamily: "Roboto Mono",
  bgcolor: "#1e3231",
  mt: {
    xs: "7rem",
    sm: "11rem",
    md: "15rem",
    lg: "7rem",
  },
  p: "0.2rem 2rem",
  borderRadius: "0.3rem",
  zIndex: "5",
  display: {
    xs: "none",
    sm: "none",
    md: "none",
    lg: "inline",
  },

  "&:hover": {
    color: "#1e3231",
    bgcolor: "white",
  },
};

const hoverMiniBtn = {
  position: "absolute",
  color: "white",
  fontSize: "1rem",
  fontFamily: "Roboto Mono",
  bgcolor: "#1e3231",
  mt: {
    xs: "7rem",
    sm: "11rem",
    md: "15rem",
    lg: "15rem",
  },
  p: "0.2rem 2rem",
  borderRadius: "0.3rem",
  zIndex: "5",

  display: {
    sm: "inline",
    md: "inline",
    lg: "none",
  },

  "&:hover": {
    color: "#1e3231",
    bgcolor: "white",
  },
};

const FeatureWork = () => {
  return (
    <Container fixed sx={{ mt: " 4rem", mb: "4rem" }}>
      <Grid container lg={12}>
        <Grid xs={12} lg={4}>
          <Box sx={{ p: "0 4rem 0 0", mb: "2rem" }}>
            <Typography
              sx={{
                mb: "2rem",
                fontFamily: "Syne",
                fontSize: "calc(2em + 1vw)",
              }}
            >
              Features
              <br /> Work
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              minus quos accusamus quo modi.
            </Typography>
            <Button sx={blackBtn}>SEE ALL WORK</Button>
          </Box>
        </Grid>

        <Grid container lg={8}>
          <Grid xs={12} lg={12}>
            <Grid
              xs={12}
              lg={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button sx={hoverBtn}>Preview</Button>
            </Grid>

            <img src={img1} alt="img1" className="card-style" />

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontFamily: "Syne" }}>Dancing Star</Typography>
              <Typography sx={{ fontFamily: "Syne" }}>2022</Typography>
            </Box>
          </Grid>

          <Grid xs={12} lg={12} sx={{ m: " 1rem 0 " }}>
            <Divider />
          </Grid>

          <Grid xs={12} lg={5.7} sx={{ mt: "1rem" }}>
            <Grid
              xs={12}
              lg={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button sx={hoverHoverBtn}>Preview</Button>
              <Button sx={hoverMiniBtn}>Preview</Button>
            </Grid>
            <img src={img2} alt="img1" className="card-style" />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontFamily: "Syne" }}>Enjoy Silence</Typography>
              <Typography sx={{ fontFamily: "Syne" }}>2022</Typography>
            </Box>
          </Grid>

          <Divider
            sx={{
              display: { xs: "none", sx: "none", md: "none", lg: "inline" },
              height: "14rem",
              mr: "1rem",
              ml: "1rem",
              mt: "2rem",
            }}
            orientation="vertical"
            variant="middle"
          />

          <Grid xs={12} lg={5.7} sx={{ mt: "1rem" }}>
            <Grid
              xs={12}
              lg={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button sx={hoverHoverBtn}>Preview</Button>
              <Button sx={hoverMiniBtn}>Preview</Button>
            </Grid>
            <img src={img3} alt="img1" className="card-style" />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontFamily: "Syne" }}>Pure Vision</Typography>
              <Typography sx={{ fontFamily: "Syne" }}>2022</Typography>
            </Box>
          </Grid>

          <Grid xs={12} lg={5.7} sx={{ mt: "1rem" }}>
            <Grid
              xs={12}
              lg={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button sx={hoverHoverBtn}>Preview</Button>
              <Button sx={hoverMiniBtn}>Preview</Button>
            </Grid>
            <img src={img4} alt="img1" className="card-style" />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontFamily: "Syne" }}>Boring Brand</Typography>
              <Typography sx={{ fontFamily: "Syne" }}>2021</Typography>
            </Box>
          </Grid>

          <Divider
            sx={{
              display: { xs: "none", sx: "none", md: "none", lg: "inline" },
              height: "14rem",
              mr: "1rem",
              ml: "1rem",
              mt: "2rem",
            }}
            orientation="vertical"
            variant="middle"
          />

          <Grid xs={12} lg={5.7} sx={{ mt: "1rem" }}>
            <Grid
              xs={12}
              lg={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button sx={hoverHoverBtn}>Preview</Button>
              <Button sx={hoverMiniBtn}>Preview</Button>
            </Grid>
            <img src={img5} alt="img1" className="card-style" />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontFamily: "Syne" }}>New Culture</Typography>
              <Typography sx={{ fontFamily: "Syne" }}>2021</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ my: 0.5, mt: "4rem", mb: "4rem" }} />
    </Container>
  );
};

export default FeatureWork;
