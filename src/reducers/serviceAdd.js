import { CHANGE_SERVICE_FIELD, CLEAR_SERVICE_FIELDS, EDIT_SERVICE, SET_ERROR } from '../actions/actionTypes';

const initialState = {
  id: '',
  name: '',
  price: '',
  isError: false
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case CLEAR_SERVICE_FIELDS:
      return initialState;
    case EDIT_SERVICE:
      return { ...action.payload, price: String(action.payload.price), isError: false };
    case SET_ERROR:
      return { ...state, isError: true };
    default:
      return state;
  }
}
