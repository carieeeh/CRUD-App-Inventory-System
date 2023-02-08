import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from "@mui/material";

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

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/zarathelle/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class="containerProduct">
      <h1>Products</h1>
      <Container
        sx={{
          pt: "30px",
          backgroundColor: "#8b8bc5",
          borderRadius: "10px",
        }}
      >
        <Box>
          <Grid container rowSpacing={2} columnSpacing={2}>
            {zarathelle.map((necklace) => (
              <Grid key={necklace.id} item xs={12} sm={6} md={4}>
                <Card sx={{ background: "#EBECF0" }}>
                  {necklace.image && (
                    <CardMedia
                      sx={{
                        height: "380px",
                        width: "100%",
                        position: "inherit",
                        objectFit: "contain",
                      }}
                      image={`/images/${necklace.image}`}
                      alt=""
                    />
                  )}
                  <CardContent>
                    <h2>{necklace.prod_name}</h2>
                    <p>
                      Description: <br /> {necklace.prod_description}
                    </p>
                    <p>Price: Php {necklace.price}</p>
                    <p>Stocks: {necklace.stocks} pcs</p>
                    <Box>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#FDB5B5",
                          "&:hover": { backgroundColor: "#FFD7D9" },
                          color: "black",
                          margin: "5%",
                        }}
                        onClick={() => handleDelete(necklace.id)}
                      >
                        Delete
                      </Button>

                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#FDB5B5",
                          "&:hover": { backgroundColor: "#FFD7D9" },
                        }}
                      >
                        <Link
                          style={{ padding: "0", color: "black" }}
                          to={`/Update/${necklace.id}`}
                        >
                          Update
                        </Link>
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FDB5B5",
            "&:hover": { backgroundColor: "#FFD7D9" },
            margin: "5%",
          }}
        >
          <Link
            style={{
              color: "black",
              width: "200%",
            }}
            to="/Add"
          >
            Add New Item
          </Link>
        </Button>
      </Container>
    </div>
  );
};

export default Zarathelle;
