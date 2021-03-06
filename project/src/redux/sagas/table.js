import { put, takeEvery, call } from 'redux-saga/effects'

import {
  GetTableStart,
  GetTableSuccess,
  GetTableFail,
  AddRowStart,
  AddRowSuccess,
  AddRowFail
} from '../actions/table'

import { GET_TABLE, ADD_ROW, host } from '../../constants';
import { instance } from '../../utils/axios';

function* getTable() {
  yield put(GetTableStart());
  try {
    const response = yield call (
      () => instance.get(`${host}/`)
    );
    yield put(GetTableSuccess(response.data))
  } catch(error) {
    const err = error.message === 'Network Error' ? {status: error.message} :
    {status: error.response.status, statusText: error.response.statusText}
    yield put(GetTableFail(err));
  }
}

function* addRow(data) {
  yield put(AddRowStart());
  try {
    const response = yield call (
      () => instance.post(`${host}`, {
          id: data.id,
          lastName: data.lastName,
          firstName: data.firstName,
          phone: data.phone,
          email: data.email
        })
    );
    yield put(AddRowSuccess(response.data))
  } catch(error) {
    const err = error.message === 'Network Error' ? {status: error.message} :
    {status: error.response.status, statusText: error.response.statusText}
    yield put(AddRowFail(err));
  }
}

export function* watchTable() {
  yield takeEvery(`${GET_TABLE}`, getTable);
  yield takeEvery(`${ADD_ROW}`, addRow);
}
