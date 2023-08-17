import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonials";
import Product from "./components/Product";
import Contact from "./components/Contact";
import About from "./components/About";


export default function Home() {
  return (
    <main className="bg-white w-full h-full text-gunmetal ">
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  )
}
