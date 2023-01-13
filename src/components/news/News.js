import {
  Grid,
  Box,
  Typography,
  Divider,
  Container,
  Button,
} from "@mui/material";

import img from "./img/img.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";

const itemArr = [
  {
    img: img,
    teg: "BRANDING, DESIGN",
    title: "Things to Look for When Comparing Branding Alternatives",
  },
  {
    img: img2,
    teg: "BRANDING, DESIGN",
    title: "5 Stand-out Features of Branding You Should Know",
  },
  {
    img: img3,
    teg: "BRANDING, DESIGN",
    title: "Branding: What Real Customers Have to Say",
  },
];

const blackBtn = {
  color: "#1e3231",
  fontSize: "calc(0.2em + 0.85vw)",
  fontFamily: "Roboto Mono",
  bgcolor: "white",
  border: "1px solid #1e3231",
  mt: {
    xs: "rem",
    sm: "rem",
    md: "rem",
    lg: "rem",
  },

  p: "0.2rem 2rem",
  borderRadius: "0.3rem",

  "&:hover": {
    color: "white",
    bgcolor: "#1e3231",
  },
};

const News = () => {
  return (
    <Container fixed>
      <Grid container>
        <Grid xs={12}>
          <Box
            sx={{
              display: "flex",
              mb: "4rem",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Syne",
                fontSize: {
                  xs: "calc(0.1em + 1vw)",
                  lg: "calc(1em + 1vw)",
                },
                lineHeight: {
                  xs: "2rem",
                },
              }}
            >
              LATEST NEWS
            </Typography>
            <Button sx={blackBtn}>SEE ALL</Button>
          </Box>

          <Divider sx={{ my: 0.5, mt: "2rem", mb: "4rem" }} />
        </Grid>

        <Grid container xs={12}>
          {itemArr.map((item) => {
            return (
              <Grid xs={4} lg={4} sx={{ p: "1rem" }}>
                <img
                  src={item.img}
                  alt={item.index}
                  style={{ width: "100%", borderRadius: "0.7rem" }}
                />
                <Typography
                  sx={{
                    fontFamily: "Syne",
                    mt: "1rem",
                    fontSize: "calc(0.2em + 0.85vw)",
                  }}
                >
                  {item.teg}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Syne",
                    mt: "1rem",
                    fontSize: "calc(0.5em + 0.85vw)",
                  }}
                >
                  {item.title}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Divider sx={{ my: 0.5, mt: "2rem", mb: "4rem" }} />
    </Container>
  );
};

export default News;
// 5 Stand-out Features of Branding You Should Know
// Branding: What Real Customers Have to Say
