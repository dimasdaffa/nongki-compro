import Hero from "./components/Hero"
import About from "./components/About"
import Events from "./components/Events"
import Join from "./components/Join"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Activity from "./components/Activity"

export default function Home() {
  return (
    <main >
      <Navbar/>
      <Hero />
      <About />
      <Activity/>
      <Events />
      <Join />
      <Footer />
    </main>
  )
}
