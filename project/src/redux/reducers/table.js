import {
  GET_TABLE,
  ADD_ROW,
} from '../../constants';

const initialState = {
  loading: false,
  rows: [],
  error: {},
};

export const table = function reducer(state = initialState, action) {
  switch (action.type) {
    case`${GET_TABLE}_START`:
      return {
        ...state,
        loading: true,
      }
    case `${GET_TABLE}_SUCCESS`:
      return {
        rows: [ ...state.rows, ...action.payload.data],
        loading: false,
      }
    case `${GET_TABLE}_FAIL`:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case`${ADD_ROW}_START`:
      return {
        ...state,
        loading: true,
      }
    case `${ADD_ROW}_SUCCESS`:
    console.log(action.payload);
      return {
        rows: [ action.payload.data,...state.rows],
        loading: false,
      }
    case `${ADD_ROW}_FAIL`:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}
