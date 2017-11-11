import nba from 'nba'
export const SORT_INDIVIDUALS_BY = 'SORT_INDIVIDUALS_BY'
export const TOGGLE_AXES = 'TOGGLE_AXES'
export const RECIEVE_INDIVIDUAL_DATA = 'RECIEVE_INDIVIDUAL_DATA'
export const REQUEST_INDIVIDUAL_DATA = 'REQUEST_INDIVIDUAL_DATA'

export const sortIndividualsBy = cat => {
	console.log("hi")
	return {
	type: 'SORT_INDIVIDUALS_BY',
	cat
	}	
}

export const toggleAxes = (axis,cat) => ({
	type: 'TOGGLE_AXES',
	axis,
	cat
})

export const requestIndividualData = () => ({
 	type: 'REQUEST_INDIVIDUAL_DATA',
})

export const recieveIndividualData = (players) => ({
	type: 'RECIEVE_INDIVIDUAL_DATA',
	players
})

export const fetchNBAData = () => {
  return dispatch => {
  	dispatch(requestIndividualData())
    return nba.stats.playerStats()
      .then(response => response.leagueDashPlayerStats)
      .then(players => dispatch(recieveIndividualData(players)))
  }
}



