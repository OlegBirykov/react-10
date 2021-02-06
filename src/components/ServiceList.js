import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { editService, removeService, clearServiceFields, setError } from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const isEdit = useSelector(state => state.serviceAdd.isEdit);
  const dispatch = useDispatch();

  const handleEdit = (id, name, price) => {
    if (isEdit) {
      dispatch(setError('Завершите редактирование текущей записи'));
    } else {
      dispatch(editService(id, name, price));
    }
  }

  const handleRemove = id => {
    if (isEdit) {
      dispatch(setError('Завершите редактирование текущей записи'));
    } else {
      dispatch(removeService(id));
      dispatch(clearServiceFields());
    }
  }

  return (
    <ul>
      {items.map(({ id, name, price }) => (
        <li key={id}>
          {name} {price}
          <button onClick={() => handleEdit(id, name, price)}>&#x270E;</button>  
          <button onClick={() => handleRemove(id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList;
