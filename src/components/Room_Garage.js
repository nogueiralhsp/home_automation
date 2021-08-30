import React, { useEffect } from 'react';
import { FaLightbulb, FaDoorClosed, FaDoorOpen } from 'react-icons/fa';
const UPDATE_MS = 2000

class Garage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      room_temperature: 100,
      lightOne: false,
      lightTwo: false,
      frontDoorOpen: true,
      backDoorOpen: true,
    }
  }

  componentDidMount() {
    this.lightOneUpdatedStatus()
    this.temperatureUpdate()//calls for temperature on start of the page
    this.interval = setInterval(() => {
      this.temperatureUpdate()
      this.lightOneUpdatedStatus()
    }, UPDATE_MS)//calls refresh every UPDATE_MS milliseconds
  }

  // reads the last post from data base and updates temperatyre on screen, time set on set
  temperatureUpdate() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://my-home-automation-api.herokuapp.com/device/611e35ada7eb2f23a5a86999", requestOptions)
      .then(response => response.json())
      .then(result => {
        const current_room_temperature = result.statusValue
        this.setState((prevState) => {
          return {
            room_temperature: current_room_temperature
          }
        })
      })
      .catch(error => console.log('error', error));
  }

  lightOneUpdatedStatus() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://my-home-automation-api.herokuapp.com/device/6128d9c2274a6f001670e7b9", requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        this.setState(() => {
          return {
            lightOne: result.statusBooleanValue
          }
        })
      })
      .catch(error => console.log('error', error));
  }

  lightOneHandler() {
    this.lightOneUpdatedStatus()
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "device": "6128d9c2274a6f001670e7b9",
      "statusValue": "non",
      "statusBooleanValue": !this.state.lightOne,
      "statusType": "digital"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://my-home-automation-api.herokuapp.com/device/status", requestOptions)
      .then(response => response.text())
      // .then(result => console.log(result))
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
          <p>Current Room Temperature <br />{this.state.room_temperature === 100 ? `loading...` : `${this.state.room_temperature} °C`}</p>
        </div>
        <div className='card-items'>
          <h3>Lights</h3>
          <a href=""
            className='button'
            aria-disabled='true'
            onClick={(e) => {
              e.preventDefault()
              this.lightOneHandler()

            }}
          >
            <FaLightbulb className={this.state.lightOne ? 'iconStatusOn' : 'iconStatusOff'} />
            {'\u00A0'}Light 1 {this.state.lightOne ? ' = On' : ' = Off'}
          </a>

          <a href=""
            className='button'
            onClick={(e) => {
              e.preventDefault()
              this.setState((prevState) => {
                return {
                  lightTwo: !this.state.lightTwo
                }
              })
            }}
          >
            <FaLightbulb className={this.state.lightTwo ? 'iconStatusOn ' : 'iconStatusOff '} />
            {'\u00A0'}Light 2 {this.state.lightTwo ? ' = On' : ' = Off'}
          </a>

        </div>
        <div className='card-items'>
          <h3>Doors</h3>

          <a href=""
            className='button'
            onClick={(e) => {
              e.preventDefault()
              this.setState((prevState) => {
                return {
                  frontDoorOpen: !this.state.frontDoorOpen
                }
              })
            }}
          >
            <FaDoorOpen className={this.state.frontDoorOpen ? ' iconStatusOn ' : ' iconStatusOff'} />
            {'\u00A0'}Front Door {this.state.frontDoorOpen ? ' = Closed' : ' = Opened'}
          </a>

          <a href=""
            className='button'
            onClick={(e) => {
              e.preventDefault()
              this.setState((prevState) => {
                return {
                  backDoorOpen: !this.state.backDoorOpen
                }
              })
            }}
          >
            <FaDoorOpen className={this.state.backDoorOpen ? ' iconStatusOn ' : ' iconStatusOff'} />
            {'\u00A0'}Back Door {this.state.backDoorOpen ? ' = Closed' : ' = Opened'}
          </a>

        </div>
      </div>
    );
  }
}

export default Garage