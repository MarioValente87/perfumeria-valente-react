import React, {Fragment} from 'react';
import Heroimage from './components/Heroimage';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailConteiner from "./components/ItemDetailContainer" 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';




function App() {
  return (
    <BrowserRouter>
    <Fragment>
      <NavBar></NavBar>
      <Heroimage/>
      <Routes>
      <Route path="/*" element={<NotFound />}></Route>
      
        <Route path="/"  element={<ItemListContainer/>}></Route>
        <Route path="/perfume/:perfumeId" element={<ItemDetailConteiner/>}></Route>
        
      </Routes>
      
      
    </Fragment>
    </BrowserRouter>
  );
}

export default App;
