//individual means player in this app
import { REQUEST_DATA, RECIEVE_DATA, SORT_BY } from '../actions'

const data = (state = {isFetching: false, allData: [], slicedData: [], currentSort: "min", sorted: true}, action) => {
	switch(action.type) {
		case REQUEST_DATA:
			return {
				...state,
				isFetching: true,
			}
		case RECIEVE_DATA:
			console.log(action.players)
			return {
				...state,
				isFetching: false,
				allData: action.players,
				sorted: true,
				slicedData: action.players.filter(player => player.min > 5 && player.gp > 5).sort((a,b) => b[state.currentSort] - a[state.currentSort])
			}
		case SORT_BY:
			const newSort = NBA_CATEGORY_FIELDS[action.cat]
			if (newSort === state.currentSort) {
				if (state.sorted) {
					return {
						...state,
						sorted: false,
						slicedData: state.slicedData.slice().sort((a,b) => a[NBA_CATEGORY_FIELDS[action.cat]] - b[NBA_CATEGORY_FIELDS[action.cat]])
					}
				}
				else {
					return {
						...state,
						sorted: true,
						currentSort: "min",
						slicedData: state.slicedData.slice().sort((a,b) => b["min"] - a["min"])
					}
				}
			}
			else {
				return {
					...state,
					sorted: true,
					currentSort: newSort,
					slicedData: state.slicedData.slice().sort((a,b) => b[NBA_CATEGORY_FIELDS[action.cat]] - a[NBA_CATEGORY_FIELDS[action.cat]])
				}
			}
				
	default:
		return state
	}
}

const NBA_CATEGORY_FIELDS = { "Name":"playerName","Team":"teamAbbreviation","GP":"gp","MIN":"min",
"FG": "fgm", "FGA": "fga", "FG%":"fgPct", "3P": "fG3M", "3PA": "fG3A", 
"3P%": "fg3Pct", "FTM": "ftm",
"FTA": "fta", "FT%": "ftPct", "ORB": "oreb", "DRB": "dreb", "TRB": "reb",
 "AST": "ast", "STL":"stl", "BLK": "blk", "TOV": "tov", "PF": "pf", "PTS":"pts"}

export default data