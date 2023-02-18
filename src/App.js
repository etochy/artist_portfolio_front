import { Component } from 'react';
import './App.css';
import APropos from './components/aPropos/APropos';
import Contact from './components/contact/Contact';
import ListProjects from './components/listProjects/ListProjects';
import NavBar from './components/navbar/NavBar';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className='separator'/>
        <ListProjects />
        <div className='separator'/>
        <APropos />
        <div className='separator'/>
        <Contact />
      </div>
    );
  }
}


export default App;
