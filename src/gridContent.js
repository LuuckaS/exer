import React, { Component } from 'react';
import GridCard from'./gridCard.js';
import './App.css';

class GridContent extends Component {
	render() {

    	return(

			<div>
				<div className={this.props.color}><div className="gridPhoto"></div></div>
					
				<p className="gridTitulo"> {this.props.titulo} </p>
				<p className="gridUser"> {this.props.nick}</p>
				<p className="gridAnnounce">{this.props.anuncio}</p>
				<a className="gridHashtag">{this.props.hashtag}</a>
				<p className="hashtagDescricao">{this.props.descricao</p>
				<GridCard nome="Lucas Almeida" nick="luckas_a" tweet="Annyeonghaseyo =D" tweetPic=""  />
				<GridCard />
				<GridCard />
			</div>

     );
  }
}

export default GridContent;