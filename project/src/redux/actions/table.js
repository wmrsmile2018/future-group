import { GET_TABLE, ADD_ROW } from '../../constants';

export const GetTableStart = () => ({
  type: `${GET_TABLE}_START`
})

export const GetTableSuccess = (data) => ({
  type: `${GET_TABLE}_SUCCESS`,
  payload: {
    data
  }
})

export const GetTableFail = (error) => ({
  type: `${GET_TABLE}_FAIL`,
  payload: {
    ...error
  }
})

export const GetTableCall = (data) => ({
  type: `${GET_TABLE}`,
  ...data
})
////////////////////////////////////////////////////////////////////////////////

export const AddRowStart = () => ({
  type: `${ADD_ROW}_START`
})

export const AddRowSuccess = (data) => ({
  type: `${ADD_ROW}_SUCCESS`,
  payload: {
    data
  }
})

export const AddRowFail = (error) => ({
  type: `${ADD_ROW}_FAIL`,
  payload: {
    ...error
  }
})

export const AddRowCall = (data) => ({
  type: `${ADD_ROW}`,
  ...data
})
