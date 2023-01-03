import { About } from "./Components/About";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Project } from "./Components/Project";
import './index.css'

function App() {
  return (
    <div className="h-full font-body bg-backround">
     <Header/>
     <Home/>
     <About/>
     <Project/>
     <Footer/>
    </div>
  );
}

export default App;
