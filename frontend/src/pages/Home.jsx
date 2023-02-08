import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Zarathelle = () => {
  return (
    <div
      className="contentBanner"
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <h1>
        <span>
          Welcome to<br></br>
        </span>
        Zarathelle Resin and Crafts Inventory
      </h1>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FDB5B5",
          "&:hover": { backgroundColor: "#FFD7D9" },
        }}
      >
        <Link style={{ padding: "20px", color: "black" }} to="/Products">
          Go to Products
        </Link>
      </Button>
    </div>
  );
};

export default Zarathelle;
