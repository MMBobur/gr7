
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import av1 from './asset/av1.png'
import av2 from './asset/av2.jpg'

export default function Carusel() {

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{ border: '1px solid red', width: '100%', height: '300px' }}>
        <SwiperSlide>
          <Grid mt='3%' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Avatar alt="Remy Sharp" src={av2} sx={{ width: '70px', height: '70px' }} />
            <Typography color='gray' mt='1%'>"There live the blind  texts . Separated they live in</Typography>
            <Typography color='gray'>Bookmarks right at the coast of the Semantics,a large</Typography>
            <Typography color='gray'>language ocean "</Typography>
            <Typography mt='2%' sx={{ fontFamily: 'arial black' }}>Adam Aderson</Typography>
            <Typography color='gray'>Head of business development @Colorlib</Typography>


          </Grid>
        </SwiperSlide>

        <SwiperSlide>
          <Grid mt='3%' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Avatar alt="Remy Sharp" src={av1} sx={{ width: '70px', height: '70px' }} />
            <Typography color='gray' mt='1%'>"There live the blind  texts . Separated they live in</Typography>
            <Typography color='gray'>Bookmarks right at the coast of the Semantics,a large</Typography>
            <Typography color='gray'>language ocean "</Typography>
            <Typography mt='2%' sx={{ fontFamily: 'arial black' }}>Adam Aderson</Typography>
            <Typography color='gray'>Head of business development @Colorlib</Typography>


          </Grid>
        </SwiperSlide>

        <SwiperSlide>
          <Grid mt='3%' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Avatar alt="Remy Sharp" src={av1} sx={{ width: '70px', height: '70px' }} />
            <Typography color='gray' mt='1%'>"There live the blind  texts . Separated they live in</Typography>
            <Typography color='gray'>Bookmarks right at the coast of the Semantics,a large</Typography>
            <Typography color='gray'>language ocean "</Typography>
            <Typography mt='2%' sx={{ fontFamily: 'arial black' }}>Adam Aderson</Typography>
            <Typography color='gray'>Head of business development @Colorlib</Typography>


          </Grid>
        </SwiperSlide>
      </Swiper>


    </>
  );
}
export default Carusel






