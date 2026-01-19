import { Component } from 'react';
import './App.css';
import APropos from './components/aPropos/APropos';
import Contact from './components/contact/Contact';
import ListProjects from './components/listProjects/ListProjects';
import MainPages from './components/mainPages/MainPages';
import Illustrations from './components/illustrations/Illustrations';

class App extends Component {

  render() {
    return (
      <div className='root__element'>
        {/* <MainPages /> */}
        <Illustrations />
        <ListProjects />
        <div id="a-propos" className='separator' />
        <APropos />
        <div className='separator' />
        <Contact />
      </div>
    );
  }
}


export default App;
