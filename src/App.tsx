import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import {Login, Pdv, Home} from "./pages";

function App() {


  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/pdv" element={<Pdv />}></Route>
      <Route path="/login" element={<Login />}></Route>
      </Routes>  
    </Router>
  )
}

export default App
