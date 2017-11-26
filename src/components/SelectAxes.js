import React from 'react';

const SelectAxes = ({handleXChange, handleYChange, x, y}) => (
  <form>
    <label>
      X-Series:
      <select value={x} onChange={handleXChange}>
        {Object.keys(NBA_CATEGORY_FIELDS).map((cat,i) => <option key={i} value={NBA_CATEGORY_FIELDS[cat]}>{cat}</option> )}
      </select>
    </label>
    <label>
      Y-Series:
      <select value={y} onChange={handleYChange}>
        {Object.keys(NBA_CATEGORY_FIELDS).map((cat, i) => <option key={i} value={NBA_CATEGORY_FIELDS[cat]}>{cat}</option> )}
      </select>
    </label>
  </form>
)

const NBA_CATEGORY_FIELDS = { "Name":"playerName","Team":"teamAbbreviation","Age": "age", "GP":"gp","MIN":"min",
                             "FG": "fgm", "FGA": "fga", "FG%":"fgPct", "3P": "fG3M", "3PA": "fG3A", 
                             "3P%": "fg3Pct", "FTM": "ftm",
                             "FTA": "fta", "FT%": "ftPct", "ORB": "oreb", "DRB": "dreb", "TRB": "reb",
                              "AST": "ast", "STL":"stl", "BLK": "blk", "TOV": "tov", "PF": "pf", "PTS":"pts"}

export default SelectAxes