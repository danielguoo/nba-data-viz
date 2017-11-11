import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortIndividualsBy } from '../actions'
import PlayersTable from '../components/PlayersTable'

class TableView extends Component {
  // constructor(props) {
  //   super(props)
  //   // this.handleChange = this.handleChange.bind(this)
  //   // this.handleRefreshClick = this.handleRefreshClick.bind(this)
  // }

  // componentDidMount() {
  //   const { dispatch } = this.props
  //   dispatch(fetchNBADataIfNeeded())
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
  //     const { dispatch, selectedSubreddit } = this.props
  //     dispatch(fetchPostsIfNeeded(selectedSubreddit))
  //   }
  // }

  // handleChange(nextSubreddit) {
  //   this.props.dispatch(selectSubreddit(nextSubreddit))
  //   this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
  // }

  // handleRefreshClick(e) {
  //   e.preventDefault()

  //   const { dispatch, selectedSubreddit } = this.props
  //   dispatch(invalidateSubreddit(selectedSubreddit))
  //   dispatch(fetchPostsIfNeeded(selectedSubreddit))
  // }

  render() {
    const { onHeaderClick, isFetching, individuals } = this.props
    return (
      <PlayersTable onHeaderClick={onHeaderClick} isFetching={isFetching} individuals={individuals}/>
    )
  }
}

// AsyncApp.propTypes = {
//   selectedSubreddit: PropTypes.string.isRequired,
//   posts: PropTypes.array.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   lastUpdated: PropTypes.number,
//   dispatch: PropTypes.func.isRequired
// }

const mapStateToProps = state => {
  return {
    isFetching: state.individuals.isFetching,
    individuals: state.individuals.individuals
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onHeaderClick: cat => {
      dispatch(sortIndividualsBy(cat))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableView)
