import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

const Zarathelle = () => {
  const [zarathelle, setZarathelle] = useState([]);

  useEffect(() => {
    const fetchAllZarathelle = async () => {
      try {
        const res = await axios.get("http://localhost:8800/zarathelle");
        setZarathelle(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllZarathelle();
  }, []);

  return (
    <div className="tableInventory">
      <ul class="responsive-table">
        <li class="table-header">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexBasis: "10%",
            }}
          >
            Id
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexBasis: "20%",
            }}
          >
            Product Name
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexBasis: "20%",
            }}
          >
            Materials
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexBasis: "20%",
            }}
          >
            Stocks
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexBasis: "20%",
            }}
          >
            Action
          </Box>
        </li>

        {zarathelle.map((necklace, key) => {
          return (
            <li class="table-row" key={key}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexBasis: "10%",
                }}
              >
                <p> {necklace.id}</p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexBasis: "20%",
                }}
              >
                <p>{necklace.prod_name}</p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexBasis: "20%",
                }}
              >
                <p>{necklace.materials}</p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexBasis: "20%",
                }}
              >
                <p>{necklace.stocks} pcs</p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexBasis: "20%",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FDB5B5",
                    "&:hover": { backgroundColor: "#efb7ba" },
                  }}
                >
                  <Link
                    style={{ padding: "0", color: "black" }}
                    to={`/UpdateStocks/${necklace.id}`}
                  >
                    Update Stocks
                  </Link>
                </Button>
              </Box>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Zarathelle;
