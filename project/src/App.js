import React, {useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import Table from './components/table/index';
import Loading from './components/loading/index';
import isEmpty from 'lodash/isEmpty';

const App = () => {
  const [showCircular, setShowCircular] = useState(true);
  const [rows, setRows] = useState([])

  const isLoading = useSelector(state => state.table.isLoading)
  const error = useSelector(state => state.table.error)
  const storeRows = useSelector(state => state.table.rows)

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

export default App;
