import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Table from './components/table/index';
import Loading from './components/loading/index';

const App = ({ storeRows, isLoading}) => {
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
      { showCircular && <Loading/> }
      <Table storeRows={rows}/>
    </div>
  );
}

export default connect(state => ({
  storeRows: state.table.rows,
  isLoading: state.table.loading
}))(App);
