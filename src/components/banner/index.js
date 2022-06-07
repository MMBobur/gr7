import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import DomainIcon from '@mui/icons-material/Domain';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import './style.css'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Banner() {
  return (
    <div>
      <Box sx={{ width: '100%', pt: 4, pb: 6 }}>
        <Container>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Item>
                <Typography sx={{ pt: 12, pb: 5 }}>
                  <Typography variant='h3' color='#484848' sx={{ fontWeight: 'bold', textAlign: 'start' }}>Create, Code, <br /> and Published.</Typography>
                  <Typography sx={{ textAlign: 'start', pt: 3, pb: 6 , color: '#484848', fontSize: '18px' }}>Far far away, behind the word mountains, far from the <br /> countries Vokalia and Consonantia, there live the blind <br /> texts. Separated they live in Bookmarksgrove right at<br /> the coast of the Semantics, a large language ocean.</Typography>
                  <Typography sx={{ textAlign: 'start' }}> <Typography variant='button' color='white' sx={{ padding: '3%',pb:3, bgcolor: 'blue', borderRadius: '30px' }}>Get Started</Typography> </Typography>

                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={6} md={6} sm={6} lg={6}>
                    <Item>
                      <Typography sx={{ textAlign: 'start', position: 'relative' }}>
                        <DomainIcon sx={{ fontSize: '60px', color: '#484848' }} />
                        <Typography sx={{ width: '40px', height: '40px', borderRadius: '50%', bgcolor: 'blue', position: 'absolute', top: 1, opacity: 0.6 }}></Typography>
                      </Typography>
                      <Typography sx={{ textAlign: 'start', pt: 2, }}>
                        <Typography color='#484848' sx={{ fontWeight: 'bold', fontSize: '18px', pb: 1 }}>High Quality</Typography>
                        <Typography>Far far away, behind the <br /> word mountains, far from <br />the countries</Typography>
                      </Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={6} md={6} sm={6} lg={6}>
                    <Item>
                      <Typography sx={{ textAlign: 'start', position: 'relative' }}>
                        <DomainAddIcon sx={{ fontSize: '60px', color: '#484848' }} />
                        <Typography sx={{ width: '40px', height: '40px', borderRadius: '50%', bgcolor: 'blue', position: 'absolute', top: 1, opacity: 0.6 }}></Typography>
                      </Typography>
                      <Typography sx={{ textAlign: 'start', pt: 2, }}>
                        <Typography color='#484848' sx={{ fontWeight: 'bold', fontSize: '18px', pb: 1 }}>High Quality</Typography>
                        <Typography>Far far away, behind the <br /> word mountains, far from <br />the countries</Typography>
                      </Typography>

                    </Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box sx={{ position: 'relative' }}>
                <Typography sx={{ position: 'absolute', width: '60%', height: '70%', bgcolor: 'grayscale', bottom: -50, zIndex: -1, right: -10 }}></Typography>
                <Typography className='img'>
                  <img src='https://preview.colorlib.com/theme/design/images/xhero_1.jpg.pagespeed.ic.VnxU4om_b-.webp' alt='img' width='95%' height='auto' />
                </Typography>
                <Box className='box' sx={{ bgcolor: 'black',}}>
                  <Typography sx={{ color: 'white', textAlign: 'center',pl:5,padding:5 }}>
                      <Typography sx={{ textAlign: 'start', pb: 2 }}>“Far far away, behind the word mountains, far from the <br /> countries Vokalia and Consonantia, there live the blind <br /> texts. Separated they live in Bookmarksgrove.”</Typography>
                      <Typography sx={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'start' }}>Daniella Wood</Typography>
                      <Typography sx={{ pt: 2, textAlign: 'start', pb: 2 }}>founder @ Colorlib</Typography>
                  </Typography>
              </Box>
              </Box>
          </Grid>
          </Grid>
        </Container>
      </Box>
    </div >
  )
}

export default Banner