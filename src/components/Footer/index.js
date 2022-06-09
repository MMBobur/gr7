import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const RightFirstTable = ["Home", "Services", "Work", "Process", "About Us"];
const RightSecondTable = ["Press", "Blog", "Contact", "Support", "Privacy"];
const RightThirdTable = ["Privacy", "FAQ", "Careers", "Process", "About Us"];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          <Grid item md={6} sm={12} xs={12}>
            <Item
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                color: "black",
                lineHeight: "64px",
              }}
            >
              About
            </Item>
            <Item
              sx={{
                fontSize: "17px",
                fontWeight: "300",
                color: "#424542",
                lineHeight: "27px",
              }}
            >
              Far far away, behind the word mountains, far <br /> from the
              countries Vokalia and Consonantia, <br /> there live the blind
              texts. Separated they live.
            </Item>
            <Item
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                color: "black",
                lineHeight: "20px",
              }}
            >
              Connect with us
            </Item>
            <Item sx={{ marginTop: "7%" }}>
              <FacebookIcon
                sx={{
                  // margin: "15px",
                  fontSize: "15px",
                  color: "black",
                  backgroundColor: "white",
                  padding: "none",
                  boxShadow: "0px 0px 0px 15px #F8F9FA",
                  borderRadius: "3px",
                  margin: "0px 18px 0px 20px",
                }}
              />
              <TwitterIcon
                sx={{
                  // margin: "15px",
                  fontSize: "15px",
                  color: "black",
                  backgroundColor: "white",
                  padding: "none",
                  boxShadow: "0px 0px 0px 15px #F8F9FA",
                  borderRadius: "3px",
                  margin: "0px 18px 0px 20px",
                }}
              />
              <InstagramIcon
                sx={{
                  // margin: "15px",
                  fontSize: "15px",
                  color: "black",
                  backgroundColor: "white",
                  padding: "none",
                  boxShadow: "0px 0px 0px 15px #F8F9FA",
                  borderRadius: "3px",
                  margin: "0px 18px 0px 20px",
                }}
              />
              <SportsBasketballIcon
                sx={{
                  // margin: "15px",
                  fontSize: "15px",
                  color: "black",
                  backgroundColor: "white",
                  padding: "none",
                  boxShadow: "0px 0px 0px 15px #F8F9FA",
                  borderRadius: "3px",
                  margin: "0px 18px 0px 20px",
                }}
              />
              <LinkedInIcon
                sx={{
                  // margin: "15px",
                  fontSize: "15px",
                  color: "black",
                  backgroundColor: "white",
                  padding: "none",
                  boxShadow: "0px 0px 0px 15px #F8F9FA",
                  borderRadius: "3px",
                  margin: "0px 18px 0px 20px",
                }}
              />
            </Item>
          </Grid>

          <Grid item md={2} sm={4} xs={12}>
            <Item
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                color: "black",
                lineHeight: "64px",
              }}
            >
              Navigations
            </Item>
            {RightFirstTable.map((val) => {
              return (
                <Item
                  sx={{
                    color: "#424542",
                    fontSize: "16px",
                    fontFamily: "sans-serif",
                    cursor: "pointer",
                    lineHeight: "19px",
                  }}
                >
                  {val}
                </Item>
              );
            })}
          </Grid>

          <Grid item md={2} sm={4} xs={12}>
            <Item
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                color: "white",
                lineHeight: "64px",
              }}
            >
              Navigations
            </Item>
            {RightSecondTable.map((val) => {
              return (
                <Item
                  sx={{
                    color: "#424542",
                    fontSize: "16px",
                    fontFamily: "sans-serif",
                    cursor: "pointer",
                    lineHeight: "19px",
                  }}
                >
                  {val}
                </Item>
              );
            })}
          </Grid>

          <Grid item md={2} sm={4} xs={12}>
            <Item
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                color: "white",
                lineHeight: "64px",
              }}
            >
              Navigations
            </Item>
            {RightThirdTable.map((val) => {
              return (
                <Item
                  sx={{
                    color: "#424542",
                    fontSize: "16px",
                    fontFamily: "sans-serif",
                    cursor: "pointer",
                    lineHeight: "19px",
                  }}
                >
                  {val}
                </Item>
              );
            })}
          </Grid>
          <hr
            style={{
              backgroundColor: "gray",
              width: "100%",
              marginTop: "8%",
            }}
          />
          <Grid item xs={12}>
            <Item
              sx={{
                textAlign: "center",
                fontSize: "15px",
                color: "#425442",
                marginTop: "1%",
              }}
            >
              Copyright ©2022 All rights reserved | This template is made with
              by Colorlib
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
