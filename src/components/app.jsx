import React, { Component } from 'react'
var ReactDOM = require('react-dom')

const car = {
	1: {
		'name': 'Flash McQueen',
		'picture': './src/img/mcqueen.jpg'
	},
	2: {
		'name': 'Flash',
		'picture': './src/img/mcqueen.jpg'
	}
}

export class App extends React.Component() {
	constructor(props) {
		super(props)
		this.state = { currentCar: 1 }
	}

	handleClick = () => {
		this.setState(prevState => ({ currentCar: 2 }))
	}

	render() {
		return <div className="container">
			<Menu />
			<Search />
			<Main onclick={this.handleClick} car={cars[currentCar]} />
		</div >
	}

}

export function Menu() {
	return <div className="menu">
		<figure className="logo">
			<img src="./src/img/cars.png" alt="Menu" width="124" height="96" />
		</figure>
	</div>
}

export function Search() {
	return <div className="search">
		Search
	</div>
}

export const Main = (props) => {
	return <div className="car">
		<div className="options">
			<div>Related</div>
			<div>Edit</div>
		</div>
		<div className="picture"><img src={props.picture} /></div>
		<div className="name">{props.name}</div>
	</div>
}