import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonials";
import Product from "./components/Product";


export default function Home() {
  return (
    <main className="bg-white w-full h-full ">
      <Navbar />
      <Hero />
      <Product />
      <Testimonial />
      <Footer />
    </main>
  )
}
