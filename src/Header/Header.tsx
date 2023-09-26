import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link, useLocation } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ButtonGroup from "@mui/material/ButtonGroup";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import { Fab } from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import "./header.css";
import MenuItem from "@mui/material/MenuItem";
import GenresButton from "../Compoment/Button/GenresButton";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
interface HeaderProps {}
const menuItems = [
  {
    title: "HOME",
    path: "/",
  },
  {
    title: "MOVIES",
    path: "/",
  },
  {
    title: "TV SHOW",
    path: "/tvshow",
  },
];
const Header = ({}: HeaderProps) => {
  const [sidenav, setSideNav] = useState<boolean>(false);
  // const values = JSON.parse(localStorage?.getItem("values") || "");
  // const login = JSON.parse(localStorage?.getItem("login") || "");
  const favoriteData = JSON.parse(localStorage?.getItem("favorite") || "");
  console.log("yeu thich", favoriteData);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(max-width: 600px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const onOpenSideNav = () => {
    setSideNav(true);
  };
  const onCloseSideNav = () => {
    setSideNav(false);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const displaySidenav = {
    width: sidenav && matches ? "100%" : sidenav ? "23%" : "0",
    padding: "0",
  };
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <div className="header">
        <div className="logo-header">
          <Link to="/">
            <img
              width="80px"
              src="https://i.ibb.co/K9NfKFW/wired-gradient-62-film.png"
              alt="wired-gradient-62-film"
            />
          </Link>
          <Link to="/">
            <Button style={{ marginTop: "-35%", padding: "0" }}>
              <h3>MOVIE WORLD</h3>
            </Button>
          </Link>
        </div>
        <div className="menu-button-group">
          <ButtonGroup variant="text" aria-label="text button group">
            {menuItems.map((item, index) => (
              <Button>
                <Link className="list-element" to={item.path}>
                  <h3>{item.title}</h3>
                </Link>
              </Button>
            ))}
          </ButtonGroup>
        </div>
        <div>
          <Dropdown>
            <TriggerButton>
              <IconButton
                style={{ marginRight: "1px" }}
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="primary"
              >
                <AccountCircle fontSize="large" />
              </IconButton>
            </TriggerButton>
            <Menu slots={{ listbox: StyledListbox }}>
              <StyledMenuItem>
                <Link style={{ textDecoration: "none" }} to={`/register`}>
                  Create an Account
                </Link>
              </StyledMenuItem>
              <StyledMenuItem
                style={{ textDecoration: "none" }}
                onClick={handleOpen}
              >
                Favorite
              </StyledMenuItem>
              <StyledMenuItem
                onClick={() => {
                  localStorage.clear();
                }}
              >
                Log out
              </StyledMenuItem>
            </Menu>
          </Dropdown>

          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="open drawer"
            onClick={onOpenSideNav}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </div>

        <div id="mySidenav" className="sidenav" style={displaySidenav}>
          <div id="home-SideNav" className="home-sidenav">
            <div className="homebutton">
              <Link to={`/`}>
                <IconButton size="large" edge="start" color="primary">
                  <HomeIcon fontSize="large" />
                  <p>Home</p>
                </IconButton>
              </Link>
            </div>
            <div className="closebutton">
              <Button size="small" variant="contained" color="primary">
                <CloseIcon onClick={onCloseSideNav} fontSize="small" />
              </Button>
            </div>
          </div>

          <div id="genre-SideNav" className="home-sidenav">
            <div className="home-sidenav-discover">
              <Link to={`/genres`}>
                <IconButton size="large" edge="start" color="primary">
                  <ExploreIcon fontSize="inherit" />
                  <p>Discovery</p>
                </IconButton>
              </Link>
            </div>
            <div className="home-sidenav-genre-btn">
              <GenresButton />
            </div>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}></Box>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Header;
const blue = {
  50: "#F0F7FF",
  100: "#DAECFF",
  200: "#99CCF3",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 2px 16px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  z-index: 1;
  `
);

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 600;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;
  border: none;
  `
);
