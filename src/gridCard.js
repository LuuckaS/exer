import React, { Component } from 'react';
import CardContent from'./cardContent.js';
import './App.css';

class GridCard extends Component {
	render() {

    	return(

			<div>
				<div className="cardProfile"> <CardContent nome={this.props.nome} nick={this.props.nick} tweet={this.props.tweet} tweetPic={this.props.tweetPic} /></div>
			</div>

     );
  }
}

export default GridCard;