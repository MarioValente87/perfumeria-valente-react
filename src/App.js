import React, {Fragment} from 'react';
import Heroimage from './components/Heroimage';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Contador from './components/Contador';

function App() {
  return (
    <Fragment>

      <NavBar/>
      <Heroimage/>
      <ItemListContainer/>
      <Contador/>
    </Fragment>
  );
}

export default App;
