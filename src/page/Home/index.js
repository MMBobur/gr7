import React from 'react'

import Navbar from "./../../components/Navbar";
import Banner from "./../../components/banner";
import Ratings from "./../../components/ratings";
import FarFar from "./../../components/farFar";
import Carusel from "./../../components/carusel";
import Latest from "./../../components/latest";
import Footer from "./../../components/Footer";

function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Banner/> */}
      <Ratings/>
      {/* <FarFar/> */}
      {/* <Carusel/> */}
      <Latest/>
      <Footer/>
    </div>
  )
}

export default Home