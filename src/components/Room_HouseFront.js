import React from 'react';
import {
  Temperature_Control
} from '../components'
import { FaLightbulb } from 'react-icons/fa'

class HouseFront extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      frontLightsOn: false,
      driveWayLightsOn: false
    }
  }

  render() {
    return (
      <div className="card_root">
        <div className='card-title'>
          <h2>House Outside</h2>
        </div>
        <div className='card-items'>
          <Temperature_Control />
        </div>
        <div className='card-items'>
          <h3>Lights</h3>
          <a href=""
            className='button'
            onClick={(e)=>{
              e.preventDefault()
              this.setState((prevState) =>{
                return {
                  frontLightsOn:!this.state.frontLightsOn
                }
              })
            }}
          >
            <FaLightbulb className={this.state.frontLightsOn ? 'iconStatusOn' : 'iconStatusOff'} />
            {'\u00A0'}Front Door {this.state.frontLightsOn ? ' = On' : ' = Off'}</a>
          <a href=""
            className='button'
            onClick={(e)=> {
              e.preventDefault()
              this.setState((prevState)=>{
                return {
                  driveWayLightsOn:!this.state.driveWayLightsOn
                }
              })
            }}
          >
            <FaLightbulb className={this.state.driveWayLightsOn ? 'iconStatusOn' : 'iconStatusOff'} />
            {'\u00A0'}Driveway {this.state.driveWayLightsOn ? ' = On' : ' = Off'}</a>
        </div>
      </div>
    );
  }
}
export default HouseFront