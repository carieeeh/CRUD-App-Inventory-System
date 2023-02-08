import { NavLink, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Box, Button } from "@mui/material";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav style={{ zIndex: "1000" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: {
            xs: "flex",
            sm: "none",
          },
          justifyContent: "flex-end",
        }}
      >
        <Button sx={{ color: "#6c71a0 " }} onClick={toggleNav}>
          <i class="fa fa-bars"></i>
        </Button>
      </Box>
      {(toggleMenu || screenWidth > 600) && (
        <ul className="list">
          <div class="logo"></div>
          <NavLink
            to="/Home"
            className={({ isActive }) =>
              isActive ? `items nav-active` : `items`
            }
          >
            <i class="fa fa-home"></i> Home
          </NavLink>
          <NavLink
            to="/AboutUs"
            className={({ isActive }) =>
              isActive ? `items nav-active` : `items`
            }
          >
            <i class="fa fa-question-circle"></i> About Us
          </NavLink>
          <NavLink
            to="/Products"
            className={({ isActive }) =>
              isActive ? `items nav-active` : `items`
            }
          >
            <i class="fa fa-shopping-cart"></i> Products
          </NavLink>
          <NavLink
            to="/Inventory"
            className={({ isActive }) =>
              isActive ? `items nav-active` : `items`
            }
          >
            <i class="fab fa-dropbox"></i> Inventory
          </NavLink>
          <div class="Label">Hello Seller!</div>
        </ul>
        // <ul className="list">
        //   <div class="logo"></div>
        //   <Link to="/Home" className="items">
        //     <i class="fa fa-home"></i> Home
        //   </Link>
        //   <Link to="/AboutUs" className="items">
        //     <i class="fa fa-question-circle"></i> About Us
        //   </Link>
        //   <Link to="/Products" className="items">
        //     <i class="fa fa-shopping-cart"></i> Products
        //   </Link>
        //   <Link to="/Inventory" className="items">
        //     <i class="fab fa-dropbox"></i> Inventory
        //   </Link>
        //   <div class="Label">Hello Seller!</div>
        // </ul>
      )}
    </nav>
  );
}
