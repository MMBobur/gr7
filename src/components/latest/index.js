import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import "./style.css";

function Latest() {
  const [data, setData] = useState([
    {
      date: "MAY 12TH, 2020",
      tittle: "Far far away, behind the word mountains",
      des: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    },
    {
      date: "MAY 12TH, 2020",
      tittle: "Far far away, behind the word mountains",
      des: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    },
    {
      date: "MAY 12TH, 2020",
      tittle: "Far far away, behind the word mountains",
      des: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    },
    {
      date: "MAY 12TH, 2020",
      tittle: "Far far away, behind the word mountains",
      des: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    },
    {
      date: "MAY 12TH, 2020",
      tittle: "Far far away, behind the word mountains",
      des: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    },
  ]);
  return (
    <div style={{ backgroundColor: "#F8F9FA", padding: "70px 0px" }}>
      <Container>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "700",
            color: `#7C8099`,
            fontSize: "13px",
          }}
        >
          Blog
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "700",
            color: `black`,
            fontSize: "30px",
          }}
        >
          Latest Blog Posts
        </Typography>
        <Grid
          container
          justifyContent={"center"}
          spacing={1}
          columns={{ xs: 4, sm: 8, md: 18 }}
        >
          {data.map((val) => (
            <Grid
              item
              md={3}
              sm={4}
              xs={9}
              className="Cards"
              sx={{ backgroundColor: "white", borderRadius: "5px",marginTop:"30px",width:"210px",marginLeft:"30px" }}
            >
              <React.Fragment>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14,fontWeight:700 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {val.date}
                  </Typography>
                  <Typography variant="h5" component="div" sx={{fontWeight:"700",fontSize:"16px"}}>
                    {val.tittle}
                  </Typography>
                  <Typography sx={{ mb: 1.5,marginTop:"5px" }} color="text.secondary">
                    {val.des}
                  </Typography>
                </CardContent>
              </React.Fragment>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Latest;
