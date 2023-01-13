import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import bgcImg from "./img/main-img2.jpg";

const MainPage = () => {
  return (
    <Container fixed>
      <Box sx={{ display: "flex", mt: "4rem" }}>
        <Grid container spacing={2}>
          <Grid sx={{ mb: "4rem" }} item xs={12} sm={12} md={6}>
            <Typography
              sx={{
                fontFamily: "Syne",
                // fontSize: "calc(3em + 1vw)",
                fontSize: "calc(2em + 1vw)",
                lineHeight: {
                  xs: "3rem",
                  sm: "4rem",
                  md: "4rem",
                  lg: "4rem",
                },
              }}
            >
              We are a <br />
              digital agency
              <br /> from Lisbon.
            </Typography>
            <Typography sx={{ p: "0  4rem 0 0", fontFamily: "Mulish" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium perferendis.{" "}
            </Typography>
          </Grid>

          <Grid sx={{}} item xs={12} sm={12} md={6}>
            <img
              src={bgcImg}
              alt="img"
              style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
            />
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ my: 0.5, mt: "4rem" }} />
    </Container>
  );
};

export default MainPage;

// xs: "none", sm: "none", md: "none", lg: "inline"
