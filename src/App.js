import React, { Component } from 'react';
import './index.css';
import Nav from'./navBar.js';
import Grid from'./grid.js';

export default class App extends Component {

  render() {

    return(

      <div>

        <Nav />
        <br />
        <br />
        <br />
        <div className="mdl-grid">
          <Grid tamanho="mdl-cell mdl-cell--4-col" titulo="Lucas Almeida" nick="@luckas_a" color="blue" />
          <Grid tamanho="mdl-cell mdl-cell--6-col" color="noColor" />
          <Grid tamanho="mdl-cell mdl-cell--2-col" color="no Color" />
        </div>  



      </div>

    );

  }

}
