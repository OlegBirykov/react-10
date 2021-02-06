import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { editService, removeService, clearServiceFields, setError } from '../actions/actionCreators';
import { connect } from 'react-redux';

class ServiceListClassBased extends Component {
  handleEdit = (id, name, price) => {
    if (this.props.isEdit) {
      this.props.setError('Завершите редактирование текущей записи');
    } else {
      this.props.onEdit(id, name, price);
    }
  }
 
  handleRemove = id => {
    if (this.props.isEdit) {
      this.props.setError('Завершите редактирование текущей записи');
    } else {
      this.props.onDelete(id);
      this.props.onReset();
    }
  }

  render() {
    const { items } = this.props;

    return (
      <ul>
        {items.map(({ id, name, price }) => (
          <li key={id}>
            {name} {price}
            <button onClick={() => this.handleEdit(id, name, price)}>&#x270E;</button>  
            <button onClick={() => this.handleRemove(id)}>✕</button>
          </li>
        ))}
      </ul>
    )
  }
}

ServiceListClassBased.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  isEdit: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired   
}

const mapStateToProps = (state) => ({
  items: state.serviceList,
  isEdit: state.serviceAdd.isEdit
});

const mapDispatchToProps = (dispatch) => {
  return {
    onEdit: (id, name, price) => dispatch(editService(id, name, price)),
    onDelete: id => dispatch(removeService(id)),
    onReset: () => dispatch(clearServiceFields()),
    setError: (error) => dispatch(setError(error))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListClassBased);
