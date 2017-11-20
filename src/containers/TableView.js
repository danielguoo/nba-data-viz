import { connect } from 'react-redux'
import { sortBy } from '../actions'
import PlayersTable from '../components/PlayersTable'

const mapStateToProps = state => {
  return {
    isFetching: state.data.isFetching,
    slicedData: state.data.slicedData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: cat => {
      dispatch(sortBy(cat))
    }
  }
}

const TableView = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersTable)

export default TableView
