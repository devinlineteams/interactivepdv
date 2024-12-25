import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import {Login, Pdv} from "./pages";

function App() {


  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/pdv" element={<Pdv />}></Route>
      </Routes>  
    </Router>
  )
}

export default App
