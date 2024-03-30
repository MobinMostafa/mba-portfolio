import Employe from "./components/Employe"
import FooteTop from "./components/FooteTop"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import JobSection from "./components/JobSection"
import RankSection from "./components/RankSection"
import Search from "./components/Search"
import Vaccancis from "./components/Vaccancis"
import Works from "./components/Works"



const App = () => {
  return (
    <div className="md:mx-auto">
      <Header/>
      <main>
        <Hero/>
        <RankSection/>
        <Employe/>
        <JobSection/>
        <Vaccancis/>
        <Search/>
        <Works/>
        <FooteTop/>
      </main>
      <Footer/>
    </div>
  )
}

export default App