import nba from 'nba'
export const SORT_BY = 'SORT_BY'
export const TOGGLE_AXES = 'TOGGLE_AXES'
export const RECIEVE_DATA = 'RECIEVE_DATA'
export const REQUEST_DATA = 'REQUEST_DATA'
export const ADD_FILTER = 'ADD_FILTER'

export const sortBy = cat => ({
	type: 'SORT_BY',
	cat	
})

export const toggleAxes = (axis,cat) => ({
	type: 'TOGGLE_AXES',
	axis,
	cat
})

export const addFilter = (cat, option) => ({
	type: 'ADD_FILTER',
	cat,
	option
})

export const requestData = () => ({
 	type: 'REQUEST_DATA',
})

export const recieveData = (players) => ({
	type: 'RECIEVE_DATA',
	players
})

export const fetchNBAData = () => {
  return dispatch => {
  	dispatch(requestData())
    return nba.stats.playerStats({PlayerPosition: "", PlayerExperience: ""})
      .then(response => response.leagueDashPlayerStats)
      .then(players => dispatch(recieveData(players)))
  }
}



