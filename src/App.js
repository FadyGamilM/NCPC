import Hero from "./components/Hero";
import Header from "./components/Header";
import Info from "./components/Info";
import Sectors from "./components/Sectors";
import Contact from "./components/Contact";
import Outlets from "./components/Outlets";
function App() {
  return (
    <div className=" px-4 pt-4 gap-y-8 flex flex-col">
      <Header />
      <Hero />
      <Info />
      <Sectors />
      <Outlets />
      <Contact />
    </div>
  );
}

export default App;
