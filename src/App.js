import React, {Fragment} from 'react';
import Heroimage from './components/Heroimage';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <Fragment>

      <NavBar/>
      <Heroimage/>
      <ItemListContainer/>
    </Fragment>
  );
}

export default App;
