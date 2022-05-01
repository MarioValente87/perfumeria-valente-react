import React, {Fragment} from 'react';
import Heroimage from './components/Heroimage';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailConteiner from "./components/ItemDetailContainer"




function App() {
  return (
    <Fragment>

      <NavBar/>
      <Heroimage/>
      <ItemListContainer/>
    <ItemDetailConteiner/>
    </Fragment>
  );
}

export default App;
