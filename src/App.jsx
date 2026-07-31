import './App.css';

import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import Variant from './component/Variant/Variant';

import BestSelling from './component/BestSelling/BestSelling';
import Testimonials from './component/Testimonials/Testimonials';
import Newsletter from './component/Newsletter/Newsletter';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Variant />
      <BestSelling></BestSelling>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}

export default App;
