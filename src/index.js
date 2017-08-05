import {createStore} from 'redux'


function bigDaddyReduce (state = {clicks: 0, serverTotal: 0}, action) {
	switch(action.type) {
	case 'INCREASE_CLICKS':
		return Object.assign({}, state, {clicks: state.clicks + 1})
	case 'SERVER_TOTAL':
		return Object.assign({}, state, {serverTotal: action.serverTotal})
	default:
		return state
	}
}

window.callServer = function() {
	store.dispatch({type:'INCREASE_CLICKS'})
	
	fetch('http:localhost:3000/INCREASE_SERVER_CALLS').then((response)=>response.json().then((action)=>{

		store.dispatch(JSON.parse(action))

		const msg = document.getElementById('server-message')
		msg.innerHTML = `There have been ${store.getState().serverTotal} clicks sent to the server.`
	}))

	const cliMsg = document.getElementById('client-message')
	cliMsg.innerHTML = `There have been ${store.getState().clicks} button clicks!`
}

const store = createStore(bigDaddyReduce)


