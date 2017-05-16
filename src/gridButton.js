import React, { Component } from 'react';
import './App.css';

class GridButton extends Component {
	render() {

    	return(

			<div>
				<button={this.props.chamada}>{this.props.nome}</button>
			</div>

     );
  }
}

export default GridButton;