import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import {Login, Pdv, Home} from "./pages";
import CadastrarProduto from "./pages/cadastrar-produto/CadastrarProduto";
import React from "react";
import { EstadoCaixaProvider } from "./context/useContextMenuAtendente";



function App() {


  return (
  
      <Router>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        
         <Route path="/pdv" element={
          <EstadoCaixaProvider>
               <Pdv />
          </EstadoCaixaProvider>
          }></Route>
     
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cadastrarproduto" element={<CadastrarProduto />}></Route>
        </Routes>  
      </Router>
   
  )
}

export default App
