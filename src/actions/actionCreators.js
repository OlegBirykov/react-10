import { ADD_SERVICE, EDIT_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, CLEAR_SERVICE_FIELDS, SET_ERROR } from './actionTypes';

export function addService(id, name, price) {
  return { type: ADD_SERVICE, payload: { id, name, price } };
}

export function editService(id, name, price) {
  return { type: EDIT_SERVICE, payload: { id, name, price } };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}

export function clearServiceFields() {
  return { type: CLEAR_SERVICE_FIELDS };
}

export function setError(error) {
  return { type: SET_ERROR, payload: { error } };
}
