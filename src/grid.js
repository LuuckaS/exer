import React, { Component } from 'react';
import GridContent from'./gridContent.js';
import GridSubContent from'./gridSubContent.js';

import './App.css';

class Grid extends Component {
	render() {

    	return(

			
  				<div className={this.props.tamanho}>
  				<GridContent titulo={this.props.titulo} nick={this.props.nick} color={this.props.color} />
  				<GridSubContent />
  				</div>
  			

     );
  }
}

export default Grid;