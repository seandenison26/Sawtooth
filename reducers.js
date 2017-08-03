module.exports.bigDaddyReduce = (state = {serverCalls: 0}, action) => {
				switch(action.type) {
					case "INCREASE_SERVER_CALLS":
						return Object.assign({},state, {serverCalls: state.serverCalls + 1})
				
					default:
						return state;
				}
	
			};

