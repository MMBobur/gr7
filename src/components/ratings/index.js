import React from "react";
import { Grid, Container, Box, Typography } from "@mui/material";
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
function Ratings() {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid lg={3} md={3} sm={6} xs={12}>
            <Box style={{ textAlign: "center" }} sx={{ mt: "15%" }}>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                99.55%
              </Typography>
              <Typography>Ratings 4.9 from user</Typography>
              <Typography sx={{ color: "#9e9e9e" }}>
                Far far away, behind the word mountains.
              </Typography>
            </Box>
          </Grid>
          <Grid lg={3} md={3} sm={6} xs={12}>
            <Box style={{ textAlign: "center" }} sx={{ mt: "15%" }}>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                98,000+
              </Typography>
              <Typography>Happy Customers</Typography>
              <Typography sx={{ color: "#9e9e9e" }}>
                Far far away, behind the word mountains.
              </Typography>
            </Box>
          </Grid>
          <Grid lg={3} md={3} sm={6} xs={12}>
            <Box style={{ textAlign: "center" }} sx={{ mt: "15%" }}>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                99.99%
              </Typography>
              <Typography>Server Up time</Typography>
              <Typography sx={{ color: "#9e9e9e" }}>
                Far far away, behind the word mountains.
              </Typography>
            </Box>
          </Grid>
          <Grid lg={3} md={3} sm={6} xs={12}>
            <Box style={{ textAlign: "center" }} sx={{ mt: "15%" }}>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                1M+
              </Typography>
              <Typography>Love by our customers</Typography>
              <Typography sx={{ color: "#9e9e9e" }}>
                Far far away, behind the word mountains.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        style={{ textAlign: "center", justifyContent: "center" }}
        sx={{ mt: "5%" }}
      >
        <Typography variant="body2">How it works</Typography>
        <Typography
          variant="h4"
          style={{
            position: "absolute",
            textAlign: "center",
            justifyContent: "center",
          }}
          sx={{ fontWeight: "bold" }}
          pl={{ lg: "25%", md: "20%", sm: "5%", xs: "1%" }}
          pr={{ lg: "25%", md: "20%", sm: "5%", xs: "1%" }}
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia,
        </Typography>
      </Box>

      <Container
       sx={{
        pl:{
          lg:0,
          md:"10%",
          sm:"15%",
          xs:"15%",
        },
        mt:{
        lg:"20%",
        md:"20%",
        sm:"30%",
        xs:"45%",
      },
    }}
      
      >
      <Grid container spacing={2}
      sx={{pl:{
        lg:"10%",
        md:"10%",
        sm:0,
        xs:"10%",
      }}}
      >
        
        <Grid  xs={12} md={4} sm={6} lg={4}>
          <Typography sx={{ textAlign: "start", position: "relative" }}>
            <EmojiObjectsOutlinedIcon sx={{ fontSize: "80px", color: "#484848" }} />
            <Typography
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                bgcolor: "blue",
                position: "absolute",
                top: 1,
                opacity: 0.6,
              }}
            ></Typography>
          </Typography>
          <Typography sx={{fontWeight:"bold"}}>1. Create an account</Typography>
          <Typography sx={{position:"absolute",pb:"5%"}}>
          Connect your store, import your <br /> products, then send us your<br /> inventory.


          </Typography>
        </Grid>
        <Grid  xs={12} md={4} sm={6} lg={4}
                mt={{lg:0,md:0,sm:0,xs:"25%"}}

        >
          <Typography sx={{ textAlign: "start", position: "relative" }}>
            <TipsAndUpdatesOutlinedIcon sx={{ fontSize: "80px", color: "#484848" }} />
            <Typography
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                bgcolor: "blue",
                position: "absolute",
                top: 1,
                opacity: 0.6,
              }}
            ></Typography>
          </Typography>
          <Typography sx={{fontWeight:"bold"}}>2. Create an account</Typography>
          <Typography sx={{position:"absolute",pb:"5%"}}>
          Connect your store, import your <br /> products, then send us your<br /> inventory.


          </Typography>
        </Grid>
        <Grid  xs={12} md={4} sm={6} lg={4}
        mt={{lg:0,md:0,sm:"20%",xs:"25%"}}
        >
          <Typography sx={{ textAlign: "start", position: "relative" }}>
            <EngineeringOutlinedIcon sx={{ fontSize: "80px", color: "#484848" }} />
            <Typography
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                bgcolor: "blue",
                position: "absolute",
                top: 1,
                opacity: 0.6,
              }}
            ></Typography>
          </Typography>
          <Typography sx={{fontWeight:"bold"}}>3. Create an account</Typography>
          <Typography sx={{position:"absolute",pb:"5%"}}>
          Connect your store, import your <br /> products, then send us your<br /> inventory.


          </Typography>
        </Grid>
      </Grid>
      </Container>
    </>
  );
}

export default Ratings;
