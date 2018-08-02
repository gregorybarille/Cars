var React = require('react')
var ReactDOM = require('react-dom')
import  { App } from './app.jsx'

var defaultCar = {
	'name': 'Default',
	'color': 'None',
	'movie': 'None',
	'picture': './src/img/mcqueen.jpg',
	'sound': 'None'
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)

