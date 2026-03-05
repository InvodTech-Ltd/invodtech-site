import Hero from "../sections/Hero"
import Products from "../sections/Products"
import PlatformPhilosophy from "../sections/PlatformPhilosophy"
import Founders from "../sections/Founders"
import Pricing from "../sections/Pricing"
import Contact from "../sections/Contact"
import RequestQuote from "../sections/RequestQuote"

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <PlatformPhilosophy />
      <Founders />
      <Pricing />
      <RequestQuote />
      <Contact />
    </>
  )
}