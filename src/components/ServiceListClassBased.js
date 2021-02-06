import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { editService, removeService, clearServiceFields } from '../actions/actionCreators';
import { connect } from 'react-redux';

class ServiceListClassBased extends Component {
  handleEdit = (id, name, price) => {
    this.props.onEdit(id, name, price);
  }
 
  handleRemove = id => {
    this.props.onDelete(id);
    this.props.onReset();
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
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired  
}

const mapStateToProps = (state) => ({
  items: state.serviceList,
});

 const mapDispatchToProps = (dispatch) => {
    return {
      onEdit: (id, name, price) => dispatch(editService(id, name, price)),
      onDelete: id => dispatch(removeService(id)),
      onReset: () => dispatch(clearServiceFields())
    }
 };

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListClassBased);
