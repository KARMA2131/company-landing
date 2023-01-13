import { Container, Box } from "@mui/material";

import img1 from "./img/icon-01.png";
import img2 from "./img/icon-02.png";
import img3 from "./img/icon-03.png";
import img4 from "./img/icon-04.png";
import img5 from "./img/icon-05.png";
import img6 from "./img/icon-06.png";

const imgArr = [img1, img2, img3, img4, img5, img6];

const ClientsList = () => {
  return (
    <Container fixed>
      <Box
        sx={{ display: "flex", justifyContent: "space-around", m: " 2rem 0" }}
      >
        {imgArr.map((item) => {
          return <img src={item} alt="img" style={{ width: "4rem" }} />;
        })}
      </Box>
    </Container>
  );
};

export default ClientsList;
