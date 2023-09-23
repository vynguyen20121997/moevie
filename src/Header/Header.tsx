import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Fab } from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import "./header.css";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import GenresButton from "../Compoment/Button/GenresButton";

interface HeaderProps {}
const menuItems = [
  {
    title: "HOME",
    // icon: <HomeIcon />,
    path: "/",
  },
  {
    title: "MOVIES",
    // icon: <HomeIcon />,
    path: "/",
  },
  {
    title: "TV SHOW",
    // icon: <HomeIcon />,
    path: "/",
  },
];
const Header = ({}: HeaderProps) => {
  const [sidenav, setSideNav] = useState<boolean>(false);

  const onOpenSideNav = () => {
    setSideNav(true);
  };

  const onCloseSideNav = () => {
    setSideNav(false);
  };

  const displaySidenav = {
    width: sidenav ? "15%" : "0",
    padding: "0",
  };

  return (
    <>
      <div className="header">
        <div
          style={{
            display: "flex",
            border: "0",
            margin: "0",
          }}
        >
          <Link to="/">
            {" "}
            <img
              width="80px"
              src="https://i.ibb.co/K9NfKFW/wired-gradient-62-film.png"
              alt="wired-gradient-62-film"
            />
          </Link>
          <Link to="/">
            <Button>
              <h3>MOVIE WORLD</h3>
            </Button>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            border: "0",
            margin: "0",
            marginRight: "5%",
          }}
        >
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
          <Link to={`/register`}>
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
          </Link>
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
            <Link to={`/genres`}>
              <IconButton size="large" edge="start" color="primary">
                <ExploreIcon fontSize="inherit" />
                <p>Discovery</p>
              </IconButton>
            </Link>
            <div style={{ marginTop: "0", paddingTop: "0" }}>
              <GenresButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
