import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {


  return (
    <Router>
      <Routes>
      <Route path="/" element={<>login</>}></Route>
      <Route path="/pdv" element={<>pdv</>}></Route>
      </Routes>  
    </Router>
  )
}

export default App
