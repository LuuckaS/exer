import React, { Component } from 'react';
import './App.css';

class CardContent extends Component {
		constructor(){
		super();
		this.state = {
			time: 0$" min",
		};
	}
	
	adicionar(){
		this.setState({
		});


	}

	render() {

    	return(

			<div>
				<p>{this.props.nome} {this.ptops.nick} {this.state.time}</p>
				<p>{this.props.tweet}</p>
				<div= className={this.props.tweetPic}></div>
			</div>

     );
  }
}

export default CardContent;