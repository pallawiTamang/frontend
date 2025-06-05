import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<h2>This is about page</h2>} />
      <Route path="/contact/:id" element={<div>
        <h2>This is contact page</h2>
        <p>here will be contact description</p>
        <p>contact NO : 9819272152</p>
        <a href="/about">Go to about page </a>
      </div>} />
    </Routes>
    </BrowserRouter>
  )
}


//component vaneko type of function jasle jaile ni jsx return garxa html jasto syntax
export default App
