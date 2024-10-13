import React, { useEffect, useState } from 'react'
import Container from './Component/Container'
import Navber from './Layouts/Navber'
import Service from './Layouts/Service'
import About from './Layouts/About'
import RecentProject from './Layouts/RecentProject'
import Protfolio from './Layouts/Protfolio'
import Bennar from './Layouts/Bennar.JSX'
import Client from './Layouts/Client'
import Contact from './Layouts/Contact'
import Blog from './Layouts/Blog'
import Footer from './Layouts/Footer'
import 'lenis/dist/lenis.css'
import Lenis from 'lenis'
import Circular from './Component/Circular'



function App() {

  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  return (
    <div>
      <Container>
        <Navber />
      </Container>

      <Bennar />
      <Container>
        <Service />
        <About />
        <RecentProject />
        <Protfolio />
      </Container>
      <Client />
      <Container>
        <Contact />
        <Blog />
      </Container>
      <Footer />

      {/* <Circular /> */}
    </div>
  )
}

export default App