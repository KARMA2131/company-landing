import "../../index.css";
import logoImg from "./img/fylla.png";

import { styled, alpha } from "@mui/material/styles";
import { Button, IconButton, Menu, MenuItem, Divider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import * as React from "react";

import { Container, Box, Typography, CardMedia } from "@mui/material";

const menuItems = ["WORK", "SERVICES", "STUDIO", "BLOG"];
const socialMIcon = ["LN", "TL", "FB"];

const blackBtn = {
  color: "white",
  fontSize: "1rem",
  fontFamily: "Roboto Mono",
  bgcolor: "#1e3231",

  "&:hover": {
    color: "#1e3231",
    fontSize: "1rem",
  },
};

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === "light" ? "#1e3231" : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container fixed>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: "2rem" }}
      >
        <Box sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            image={logoImg}
            alt="logo"
            sx={{ width: "3rem", height: "3rem" }}
          />
          <Typography
            sx={{ fontSize: "calc(0.7em + 1vw)", ml: "1rem", mt: "0.65rem" }}
            xs={{}}
          >
            FYLLA
          </Typography>
        </Box>

        <Box>
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            disableElevation
            onClick={handleClick}
            sx={{
              color: "#1e3231",
              fontSize: "1rem",
              fontFamily: "Roboto Mono",
              display: { xs: "inline", sm: "inline", md: "none", lg: "none" },
            }}
          >
            <MenuRoundedIcon sx={{ mt: "0.5rem" }} />
          </Button>

          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{
              display: { xs: "inline", sm: "none", md: "none", lg: "none" },
            }}
          >
            <MenuItem onClick={handleClose} disableRipple>
              HOME
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              WORK
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              SERVICES
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              STUDIO
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              BLOG
            </MenuItem>
          </StyledMenu>
        </Box>

        <Box
          sx={{
            mt: "0.5rem",
            display: { xs: "none", sm: "none", md: "inline", lg: "inline" },
          }}
        >
          {menuItems.map((item) => {
            return (
              <Button
                sx={{
                  color: "#1e3231",
                  fontSize: "1rem",
                  fontFamily: "Roboto Mono",
                  alignItems: "center",
                  width: "fit-content",
                }}
              >
                {item}
              </Button>
            );
          })}

          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              color: "#1e3231",
              fontSize: "1rem",
              fontFamily: "Roboto Mono",
            }}
          >
            PAGES
          </Button>

          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              HOME
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              WORK
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              SERVICES
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              STUDIO
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              BLOG
            </MenuItem>
          </StyledMenu>

          <Button
            sx={{
              color: "#1e3231",
              fontSize: "1rem",
              fontFamily: "Roboto Mono",
            }}
          >
            CARD (0)
          </Button>

          <Button sx={blackBtn}>LET`S TALK</Button>

          {socialMIcon.map((item) => {
            return (
              <IconButton
                aria-label="LN"
                size="small"
                sx={{
                  border: "1px solid #1e3231",
                  color: "#1e3231",
                  ml: "1rem",
                  display: { xs: "none", sm: "none", md: "none", lg: "inline" },
                }}
              >
                {item}
              </IconButton>
            );
          })}
        </Box>
      </Box>
      <Divider sx={{ my: 0.5, mt: "1rem" }} />
    </Container>
  );
};

export default NavBar;
