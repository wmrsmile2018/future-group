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

function* getTable(data) {
  yield put(GetTableStart());
  console.log(data);
  try {
    let response;
    if (data.start && data.end) {
      response = yield call (
        () => instance.get(`${host}/?_start=${data.start}&_end=${data.end}`)
      );
    } else {
      response = yield call (
        () => instance.get(`${host}`)
      );
    }
    yield put(GetTableSuccess(response.data))
  } catch(error) {
    // console.log(error);
    yield put(GetTableFail());
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
    console.log(response);
    yield put(AddRowSuccess(response.data))
  } catch(error) {
    yield put(AddRowFail());
  }
}

export function* watchTable() {
  yield takeEvery(`${GET_TABLE}`, getTable);
  yield takeEvery(`${ADD_ROW}`, addRow);
}
