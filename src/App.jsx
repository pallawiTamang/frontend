import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import LearningUseEffect from "./LearningUseEffect"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact/:id" element={<Contact />} />
      <Route path="/useEffect" element={<LearningUseEffect/>} />
    </Routes>
    </BrowserRouter>
  )
}


//component vaneko type of function jasle jaile ni jsx return garxa html jasto syntax
export default App
