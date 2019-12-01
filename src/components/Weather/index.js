import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { actionGetWether } from '../../store/actions'
 
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
 
class Weather extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
    const { getWether } = this.props;
 
    return (
      <>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
        <button onClick={getWether}>get weather</button>
      </>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getWether: () => dispatch(actionGetWether())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Weather)