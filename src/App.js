import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import Hero from "./components/hero/hero.component";
import WhatWeOffer from "./components/offer/offer.component";
import Form from "./components/form/form.component";
import BlogSection from "./components/blog/blog.component";
import Footer from "./components/footer/footer.component";
function App() {
  return (
    <div id="App">
      <Navbar />
      <Hero />
      <WhatWeOffer />
      <BlogSection />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
