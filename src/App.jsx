import './App.css';

import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';

import BestSelling from './component/BestSelling/BestSelling';
import Testimonials from './component/Testimonials/Testimonials';
import Newsletter from './component/Newsletter/Newsletter';
import Footer from './component/Footer/Footer';
import Details from './component/Details/Details';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Details></Details>
      <BestSelling></BestSelling>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}

export default App;
