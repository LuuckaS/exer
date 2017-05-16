import React, { Component } from 'react';
import './App.css';


class Nav extends Component {
  render() {
    return (
    	<div>
	    	<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
	  			<header className="mdl-layout__header">
	    			<div className="mdl-layout__header-row">
	     				 <span className="mdl-layout-title">Title</span>
	     				 <div className="mdl-layout-spacer"></div>
	     					 <nav className="mdl-navigation mdl-layout--large-screen-only">
	      						  <a className="mdl-navigation__link" href="">Inicio</a>
	        						<a className="mdl-navigation__link" href="">Moments</a>
	        						<a className="mdl-navigation__link" href="">Notificações</a>
	       						 	<a className="mdl-navigation__link" href="">Mensagens</a>
	       						 	<label className="mdl-button mdl-js-button mdl-button--icon"
	               						htmlFor="fixed-header-drawer-exp">
	          							<i className="material-icons">search</i>
	       							 </label>
	      					 </nav>
	    				</div>
	  			</header>
	  			<div className="mdl-layout__drawer">
	   				 <span className="mdl-layout-title">Title</span>
	    			 <nav className="mdl-navigation">
	      				<a className="mdl-navigation__link" href="">Link</a>
	      				<a className="mdl-navigation__link" href="">Link</a>
	      				<a className="mdl-navigation__link" href="">Link</a>
	      				<a className="mdl-navigation__link" href="">Link</a>
	    			</nav>
	  			</div>
	  			<main className="mdl-layout__content">
	    			<div className="page-content"></div>
	  			</main>
			</div>
		</div>
    );
  }
}

export default Nav;