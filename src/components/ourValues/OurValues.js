import {
  Box,
  IconButton,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import img from "./img/img.jpg";

const itemsArr = [
  {
    count: "01",
    title: "VISION",
    contain:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae minus qui nisi beatae. Animi tenetur perferendis. ",
  },
  {
    count: "02",
    title: "INNOVATION",
    contain:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae minus qui nisi beatae. Animi tenetur perferendis.",
  },
  {
    count: "03",
    title: "CONNECTION",
    contain:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae minus qui nisi beatae. Animi tenetur perferendis.",
  },
];
const OurValues = () => {
  return (
    <Container fixed>
      <Grid container sx={{ mb: "4rem" }}>
        <Grid xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: "4rem" }}>
            <Typography
              sx={{
                fontFamily: "Syne",
                fontSize: "calc(2.5em + 1vw)",
                lineHeight: "4rem",
              }}
            >
              OUR VALUES
            </Typography>
          </Box>
          <Divider sx={{ my: 0.5, mt: "4rem", mb: "4rem" }} />
        </Grid>

        <Grid container sx={{ display: "flex" }}>
          <Grid xs={12} sm={12} md={12} lg={5.5} sx={{ mb: "2rem" }}>
            <img
              src={img}
              alt="img"
              style={{ width: "100%", borderRadius: "1.5rem" }}
            />
          </Grid>

          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{
              m: "0 2rem ",
              display: { xs: "none", sm: "none", md: "none", lg: "inline" },
            }}
          />

          <Grid xs={12} sm={12} md={12} lg={5.5}>
            {itemsArr.map((item) => {
              return (
                <Grid xs={12} sx={{ display: "flex" }}>
                  <Grid xs={2}>
                    <IconButton
                      size="small"
                      sx={{
                        border: "1px solid #1e3231",
                        color: "#1e3231",
                        ml: "1rem",
                      }}
                    >
                      {item.count}
                    </IconButton>
                  </Grid>

                  <Grid xs={10}>
                    <Typography sx={{ fontFamily: "Syne", fontSize: "1.5rem" }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontFamily: "Syne" }}>
                      {item.contain}
                    </Typography>
                    <Divider sx={{ mt: "2em", mb: "2rem" }} />
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ my: 0.5, mt: "4rem", mb: "4rem" }} />

    </Container>
  );
};

export default OurValues;
