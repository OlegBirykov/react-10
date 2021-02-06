import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeServiceField, addService, clearServiceFields, setError } from '../actions/actionCreators';

class ServiceAddClassBased extends Component {
  handleChange = evt => {
    const { name, value } = evt.target;
    this.props.onChange(name, value);
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const { id, name, price } = this.props.item;
		if (name && price && !isNaN(Number(price))) {
      this.props.onSave(id, name, price);
      this.props.onReset();
		} else {
			this.props.setError('Введите корректные данные');
		}
  }

	handleReset = () => {
    this.props.onReset();
	}

  render() {
    const { name, price, error, isEdit } = this.props.item;

    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <input name='name' onChange={this.handleChange} value={name} />
        <input name='price' onChange={this.handleChange} value={price} />
        <button type='submit'>Save</button>
        {isEdit && <button type="reset">Cancel</button>}
		  	{error && <p className="App-error">{error}</p>}
      </form>
    );
  }
}

ServiceAddClassBased.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    error: PropTypes.string,
    isEdit: PropTypes.bool,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  item: state.serviceAdd,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name, value) => dispatch(changeServiceField(name, value)),
    onSave: (id, name, price) => dispatch(addService(id, name, price)),
    onReset: () => dispatch(clearServiceFields()),
    setError: (error) => dispatch(setError(error))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceAddClassBased);
