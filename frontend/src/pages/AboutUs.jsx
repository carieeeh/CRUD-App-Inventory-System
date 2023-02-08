import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from "@mui/material";

const Zarathelle = () => {
  return (
    <div class="containerProduct">
      <h1>About Us</h1>

      <Box>
        <Container>
          <Grid container my={2} spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ background: "#EBECF0" }}>
                <CardMedia
                  sx={{
                    height: "200px",
                    width: "100%",
                    position: "inherit",
                    objectFit: "contain",
                  }}
                >
                  <img
                    alt=""
                    src="/images/about1.png"
                    height="200px"
                    width="100%"
                  />
                </CardMedia>
                <CardContent>
                  <h2>Mission</h2>
                  <p>
                    We strive to provide all women with high-quality jewelry and
                    accessories that are wearable yet beautiful, eye-catching
                    yet understated. Our goal is to help women feel presentable
                    and confident as they face each day's demands and
                    challenges. We aspire to provide people with a unique
                    product at an affordable price.
                  </p>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ background: "#EBECF0" }}>
                <CardContent>
                  <h2>About</h2>
                  <p>
                    Zarathelle is an artisan jewelry online shop established
                    last July 2021 that specializes in high-quality resin
                    necklaces. We make all of our own products right here in the
                    Philippines and fill them with care, love, and attention to
                    every detail. We've been working hard on developing new
                    products so we can offer you an even wider variety of styles
                    and designs.
                  </p>
                </CardContent>
                <CardMedia
                  sx={{
                    height: "200px",
                    width: "100%",
                    position: "inherit",
                    objectFit: "contain",
                  }}
                >
                  <img
                    alt=""
                    src="/images/about3.png"
                    height="200px"
                    width="100%"
                  />
                </CardMedia>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ background: "#EBECF0" }}>
                <CardMedia
                  sx={{
                    height: "200px",
                    width: "100%",
                    position: "inherit",
                    objectFit: "contain",
                  }}
                >
                  <img
                    alt=""
                    src="/images/about2.png"
                    height="200px"
                    width="100%"
                  />
                </CardMedia>
                <CardContent>
                  <h2>Vision</h2>
                  <p>
                    We work to create a collection of classic, yet unpretentious
                    jewelry and fashion accessories that inspire and empower
                    women to change the way they carry themselves. Our vision is
                    to support and empower our customers with our product
                    designs may it be customised or not and to make them wear
                    unique pieces that are authentic, beautiful, and
                    sustainable.
                  </p>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Zarathelle;
