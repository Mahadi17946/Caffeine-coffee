
import './App.css'
import Hero from './component/Hero/Hero'
import Navbar from './component/Navbar/Navbar'
import Varient from './component/Varient/Varient'

import BestSelling from './component/BestSelling/BestSelling'
import Testimonials from './component/Testimonials/Testimonials'
import Newsletter from './component/Newsletter/Newsletter'
import Footer from './component/Footer/Footer'

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Varient></Varient>
      <BestSelling></BestSelling>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
      <Footer></Footer>

    </>
  )
}

export default App
