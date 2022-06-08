import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
const pages = [
  "Home",
  "dropdown",
  "innner page",
  "Contact us",
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <AppBar
        sx={{
          backgroundColor: "white",
          position: "static",
          boxShadow:"none",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" },color:"blue",fontWeight:"700" }}
            >
              Design
            </Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" },color:"blue",fontWeight:"700"}}
              >
                Design
              </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" },justifyContent:"right",alignItems:'center',textAlign:'center',display:'flex' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ color: "black",display:{md:"none"}}} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    sx={{ m: 1 }}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs:"none",sm:"none", md: "flex" },
              }}
              >
              {pages.map((page) => (
                <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block"
              ,":hover":{color:"blue"} }}
                >
                  {page}
                </Button>
              ))}
            </Box>
              <Button variant="outlined" sx={{display:{xs:"none",sm:"none",md:"block",borderRadius:"20px",":hover":{color:"white",backgroundColor:"blue"}}}}>Free Templates</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default Navbar;