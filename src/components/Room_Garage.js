import React from 'react';
import { FaLightbulb, FaDoorClosed, FaDoorOpen } from 'react-icons/fa'


class Garage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      room_temperature: 0
    }
  }
  componentDidMount() {
    // var current_room_temperature = 0

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://my-home-automation-api.herokuapp.com/device/611e35ada7eb2f23a5a86999", requestOptions)
      .then(response => response.json())
      .then(result => {
        const current_room_temperature = result.statusValue
        this.setState((prevState) => {
          return{
            room_temperature:current_room_temperature
          }
        })
      })
      .catch(error => console.log('error', error));

  }
  render() {
    return (
      <div className="card_root">
        <div className='card-title'>
          <h2>Garage</h2>
        </div>
        <div className='card-items'>
          <h3>Room Temperature</h3>
          <p>{this.state.room_temperature}</p>
        </div>
        <div className='card-items'>
          <h3>Lights</h3>
          <a href="" className='button'><FaLightbulb className={true === !true ? 'iconStatusOn' : 'iconStatusOff'} /> Light 1 {true === !true ? ' = On' : ' = Off'}</a>
          <a href="" className='button'><FaLightbulb className={true === !true ? 'iconStatusOn' : 'iconStatusOff'} /> Light 2 {true === !true ? ' = On' : ' = Off'}</a>
        </div>
        <div className='card-items'>
          <h3>Doors</h3>
          <a href="" className='button'><FaDoorClosed className={true ? 'iconStatusOn' : 'iconStatusOff'} /> Front Door {true === !true ? ' = On' : ' = Off'}</a>
          <a href="" className='button'><FaDoorOpen className={true === !true ? 'iconStatusOn' : 'iconStatusOff'} /> Back Door {true === !true ? ' = On' : ' = Off'}</a>
        </div>
      </div>
    );
  }
}

export default Garage