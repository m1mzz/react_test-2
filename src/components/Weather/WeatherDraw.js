import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import watherDrawFn from '~/helpers/drawChart'

let ChartJs = null

function WeatherDraw(props) {
  const canvas = React.createRef();
  import('chart.js').then(({ default: Chart }) => {
    ChartJs = Chart
  })
  const { weather } = props.weather
  useEffect(function() {
    if (weather && ChartJs) {
      watherDrawFn(ChartJs, canvas.current, weather, props.selectedTemperature.value)
    }
  }, [weather]);

  return (<canvas className="d-block" ref={canvas}></canvas>)
}

const mapStateToProps = (state) => ({ 
  weather: state.weather,
  selectedTemperature: state.select.selectedTemperature,
})

export default connect(
  mapStateToProps
)(WeatherDraw)