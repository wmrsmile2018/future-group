import { all } from 'redux-saga/effects';

import { watchTable } from './table';

export function* rootSaga() {
  yield all([
    watchTable()
  ])
}
