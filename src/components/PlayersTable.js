import React from 'react';
import PropTypes from 'prop-types'

const PlayersTable = ({onClick, slicedData}) => (
  <table>
    <thead>
      <tr>
        {Object.keys(NBA_CATEGORY_FIELDS).map((cat_name,i) => <th onClick={() => onClick(cat_name)} key={i}>{cat_name}</th>)}
      </tr>
    </thead>
    <tbody>
      {slicedData.map((player, i) => {return <PlayerRow key={i} playerInfo={player}/> })}
    </tbody>
  </table>
)

const PlayerRow = ({playerInfo}) => (
  <tr>
    {Object.values(NBA_CATEGORY_FIELDS).map((cat,i) => <td key={i}> {playerInfo[cat]}</td>)}
  </tr>
)

PlayersTable.propTypes = {
  onClick: PropTypes.func.isRequired,
  slicedData: PropTypes.array.isRequired
}

const NBA_CATEGORY_FIELDS = { "Name":"playerName","Team":"teamAbbreviation","GP":"gp","MIN":"min",
                             "FG": "fgm", "FGA": "fga", "FG%":"fgPct", "3P": "fG3M", "3PA": "fG3A", 
                             "3P%": "fg3Pct", "FTM": "ftm",
                             "FTA": "fta", "FT%": "ftPct", "ORB": "oreb", "DRB": "dreb", "TRB": "reb",
                              "AST": "ast", "STL":"stl", "BLK": "blk", "TOV": "tov", "PF": "pf", "PTS":"pts"}

export default PlayersTable;