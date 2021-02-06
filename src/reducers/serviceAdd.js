import { CHANGE_SERVICE_FIELD, CLEAR_SERVICE_FIELDS, EDIT_SERVICE, SET_ERROR } from '../actions/actionTypes';

const initialState = {
  id: '',
  name: '',
  price: '',
  error: '',
  isEdit: false
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case CLEAR_SERVICE_FIELDS:
      return initialState;
    case EDIT_SERVICE:
      return { ...action.payload, price: String(action.payload.price), error: '', isEdit: true };
    case SET_ERROR:
      const { error } = action.payload
      return { ...state, error };
    default:
      return state;
  }
}
