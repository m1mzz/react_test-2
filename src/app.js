import React from 'react';
import Header from './components/Header'
import Weather from './components/Weather'

export default class extends React.Component{
  render () {
    return (
      <>
        <Header/>
        <Weather/>
      </>
    )
  }
}