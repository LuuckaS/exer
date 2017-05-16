import React, { Component } from 'react';
import './App.css';

class GridSubContent extends Component {
	constructor(){
		super();
		this.state = {
			tweets: 0,
			followers: 0,
		};
	}
	
	adicionar(){
		this.setState({
			tweets: this.state.tweets+1,
			followers: this.state.followers+1,
		});


	}
	render() {

    	return(

			<div>
				<p>Tweets    Followers</p>
				<p>{this.state.tweets} {this.state.followers}</p>
				<button onClick={this.adicionar.bind(this)} />
			</div>

     );
  }
}

export default GridSubContent;