import React from 'react';
import Header from './componens/Header';
import Body from './componens/Body';
import  Footer from './componens/Footer'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
        <Body/>
        <Footer/>
    </div>
  );
}

export default App;
