import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Table from './components/table/index';
import Loading from './components/loading/index';
import isEmpty from 'lodash/isEmpty';

const App = ({ storeRows, isLoading, error }) => {
  const [showCircular, setShowCircular] = useState(true);
  const [rows, setRows] = useState([])

  useEffect(() => {
    if (storeRows.length && !isLoading) {
      setShowCircular(false)
      setRows(storeRows)
    } else {
      setShowCircular(true)
    }
  }, [storeRows, isLoading])

  return (
      <div className="App">
      { showCircular && isEmpty(error) && <Loading/> }
      {!isEmpty(error) && error.status === 'Network Error' ?
        <div className="App__networkError"> Service is unavailable, please try later</div>
      : !isEmpty(error) &&
        <div className="App__error">{error.statusText} {error.status}</div>
      }
      { isEmpty(error) && <Table storeRows={rows}/> }
    </div>
  );
}

export default connect(state => ({
  storeRows: state.table.rows,
  isLoading: state.table.loading,
  error: state.table.error
}))(App);
