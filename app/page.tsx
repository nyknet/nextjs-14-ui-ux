import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { Faq } from "./components/faq";
import { Pricing } from "./components/pricing";
import { Cta } from "./components/cta";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />    
      <Hero/>
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features/>
        <Faq/>
        <Pricing/>
        <Cta />
        <Footer/>
      </div>
    </>
  )
}
