import "./App.css";
import "./index.css";

import NavBar from "./components/navBar/NavBar";
import MainPage from "./components/main/MainPage";
import ClientsList from "./components/clientsList/ClientsList";
import WhatWeDo from "./components/whatWeDo/WhatWeDo";
import FeatureWork from "./components/featureWork/FeatureWork";
import HowWeWork from "./components/howWeWork/HowWeWork";
import OurValues from "./components/ourValues/OurValues";
import Contact from "./components/contact/Contact";
import News from "./components/news/News";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <ClientsList />
      <WhatWeDo />
      <FeatureWork />
      <HowWeWork />
      <OurValues />
      <Contact />
      <News />
      <Footer />
    </div>
  );
}

export default App;
