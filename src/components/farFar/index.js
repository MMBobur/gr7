import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Img from "../../hero.jpg";
import Button from "@mui/material/Button"
export default () => {
  return (
    <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", paddingTop: "5%", backgroundColor: "#F8F9FA", }}>
      <Grid container spacing={3}>
        <Grid xs={12} md={7} sm={12} lg={7}>
          <Box sx={{ width: "100%", height: "100%", paddingTop: "12%" }}>
            <Container maxWidth="xs">
              <Typography sx={{ color: "#7C809A", fontFamily: "sans-serif", fontWeight: "700", fontSize: "15px", width: "100%" }}>
                Services
              </Typography>
              <Typography sx={{ color: "#000839", fontFamily: "sans-serif", fontWeight: "800", fontSize: "35px", width: "100%" }}>
                Far far away, behind the word mountains
              </Typography>
              <Typography sx={{ color: "#7C809A", fontFamily: "sans-serif", fontWeight: "600", fontSize: "19px", width: "85%", paddingTop: "2%" }}>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.
              </Typography>
              <Typography sx={{ color: "#7C809A", fontFamily: "sans-serif", fontWeight: "600", fontSize: "19px", width: "80%", paddingTop: "5%" }}>
                ✔  Behind the word Mountains.
              </Typography>
              <Typography sx={{ color: "#7C809A", fontFamily: "sans-serif", fontWeight: "600", fontSize: "19px", width: "80%", paddingTop: "2%" }}>
                ✔  Far far away Mountains.
              </Typography>
              <Typography sx={{ color: "#7C809A", fontFamily: "sans-serif", fontWeight: "600", fontSize: "19px", width: "80%", paddingTop: "2%", paddingBottom: "5%" }}>
                ✔  Large language Ocean.
              </Typography>
              <Button sx={{ borderRadius: "35px", border: "none", backgroundColor: "#1264FA", color: "white", padding: "2.5%", fontSize: "12px" }}>Get started</Button>
            </Container>
          </Box>
        </Grid>
        <Grid xs={12} md={5} sm={12} lg={5}>
          <Container maxWidth="xs">
            <Box sx={{ width: "100%", height: "100%" }}>
              <img src={Img} style={{ width: "100%", height: "100%" }} />
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};
