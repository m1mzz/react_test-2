import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import actions from '../../store/actions';
import cities from '~/config/cities'
import temperatureValue from '~/config/temperature'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
import WeatherDraw from './WeatherDraw'
 
class Weather extends React.Component {
  render() {
    const {
      selectedCounrty,
      selectedTemperature,
      weather,
      setSelect,
      getWether
    } = this.props;
 
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-5">
            <Select value={selectedCounrty}
                    onChange={(val) => setSelect('selectedCounrty', val)}
                    options={cities} />
          </div>
          <div className="col-sm-6 mb-5">
            <Select value={selectedTemperature}
                    onChange={(val) => setSelect('selectedTemperature', val)}
                    options={temperatureValue} />
          </div>
        </div>
        
        <Button variant="primary"
                disabled={weather.isLoading}
                onClick={getWether}
                className="mb-5">
          {weather.isLoading ? 'Loading...' : 'Get weather'}
        </Button>
        
        { weather.error &&  <Alert variant="danger">
                              <Accordion>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <h4 className="alert-heading">Network problems, try again</h4>
                                  </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                  <p className="col">{ weather.error }</p>
                                </Accordion.Collapse>
                              </Accordion>
                            </Alert> }

        <WeatherDraw />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ 
  weather: state.weather,
  selectedCounrty: state.select.selectedCounrty,
  selectedTemperature: state.select.selectedTemperature,
})

const mapDispatchToProps = dispatch => ({
  getWether: () => dispatch(actions.getWether()),
  setSelect: (key, value) => dispatch(actions.setSelect({key, value}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather)