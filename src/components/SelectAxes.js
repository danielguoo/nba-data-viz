import React from 'react';
import PropTypes from 'prop-types'

const SelectAxes = ({handleXChange, handleYChange, xseries, yseries}) => (
  <form>
    <label>
      X-Series:
      <select value={xseries} onChange={handleXChange}>
        {Object.keys(NBA_CATEGORY_FIELDS).map((cat,i) => <option key={i} value={NBA_CATEGORY_FIELDS[cat]}>{cat}</option> )}
      </select>
    </label>
    <label>
      Y-Series:
      <select value={yseries} onChange={handleYChange}>
        {Object.keys(NBA_CATEGORY_FIELDS).map((cat, i) => <option key={i} value={NBA_CATEGORY_FIELDS[cat]}>{cat}</option> )}
      </select>
    </label>
  </form>
)

const NBA_CATEGORY_FIELDS = { "Name":"playerName","Team":"teamAbbreviation","GP":"gp","MIN":"min",
                             "FG": "fgm", "FGA": "fga", "FG%":"fgPct", "3P": "fG3M", "3PA": "fG3A", 
                             "3P%": "fg3Pct", "FTM": "ftm",
                             "FTA": "fta", "FT%": "ftPct", "ORB": "oreb", "DRB": "dreb", "TRB": "reb",
                              "AST": "ast", "STL":"stl", "BLK": "blk", "TOV": "tov", "PF": "pf", "PTS":"pts"}

export default SelectAxes