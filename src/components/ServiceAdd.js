import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, clearServiceFields, setError } from '../actions/actionCreators';

function ServiceAdd() {
	const {id, name, price, error, isEdit} = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const { name, value } = evt.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = evt => {
		evt.preventDefault();
		if (name && price && !isNaN(Number(price))) {
			dispatch(addService(id, name, price));
			dispatch(clearServiceFields());
		} else {
			dispatch(setError('Введите корректные данные'));
		}
	}

	const handleReset = () => {
		dispatch(clearServiceFields());		
	}

	return (
		<form onSubmit={handleSubmit} onReset={handleReset}>
			<input name="name" onChange={handleChange} value={name} />
			<input name="price" onChange={handleChange} value={price} />
			<button type="submit">Save</button>
			{isEdit && <button type="reset">Cancel</button>}
			{error && <p className="App-error">{error}</p>}
		</form>
	);
}

export default ServiceAdd;
