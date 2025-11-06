import TopbarStart from "./components/TopbarStart.jsx"
import NavbarStart from "./components/NavbarStart.jsx";
import Carousel from "./components/Carousel.jsx";
import About from "./components/About.jsx";
import Features from "./components/Features.jsx";
import OtherFeatures from "./components/OtherFeatures.jsx";
import Service from "./components/Service.jsx";
import Appoinment from "./components/Appoinment.jsx";
import Team from "./components/Team.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Footer from "./components/Footer.jsx";
import Copyright from "./components/Copyright.jsx";
import BackToTop from "./components/BackToTop.jsx";

function App() {

    return (
        <main>            

          <TopbarStart/>
          <NavbarStart/>
          <Carousel/>
          <About/>
          <Features/>
          <OtherFeatures/>
          <Service/>
          <Appoinment/>
          <Team/>
          <Testimonial/>
          <Newsletter/>
          <Footer/>
          <Copyright/>
          <BackToTop/>

        </main>
    )
}

export default App
