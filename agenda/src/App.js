import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner';
import Conteudo from './Conteudo';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Banner />
          <br />
          <Conteudo />
        </div>
      </div>
    );
  }
}

export default App;
