import React, { Component } from 'react';
import './App.css';

class GridContent extends Component {
	render() {

    	return(

			<div>
				<div className={this.props.color}><div className="gridPhoto"></div></div>
					
				<p className="gridTitulo"> {this.props.titulo} </p>
				<p className="gridUser"> {this.props.nick}</p>
			</div>

     );
  }
}

export default GridContent;