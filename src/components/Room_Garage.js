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
      lightWorkBench: false,
      lightOneDeviceId: '6128d9c2274a6f001670e7b9',
      lightTwoDeviceId: '6148cbe49334480016839378',
      lightWorkbenchDeviceId: '61542f1bd06971001641672f',
      lightTwo: false,
      frontDoorOpen: true,
      backDoorOpen: true,
    }
  }

  componentDidMount() {
    this.lightOneUpdatedStatus()
    this.lightTwoUpdatedStatus()
    // this.lightWorkbenchUpdatedStatus()
    // this.temperatureUpdate()//calls for temperature on start of the page
    this.interval = setInterval(() => {
      this.temperatureUpdate()
      this.lightOneUpdatedStatus()
      this.lightTwoUpdatedStatus()
      this.lightWorkbenchUpdatedStatus()
    }, UPDATE_MS)//calls refresh every UPDATE_MS milliseconds
  }

  // reads the last post from data base and updates temperatyre on screen, time set on set
  temperatureUpdate() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_API_URL}/device/611e35ada7eb2f23a5a86999`, requestOptions)
      .then(response => response.json())
      .then(result => {
        const current_room_temperature = result.statusValue
        console.log(current_room_temperature);
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

    fetch(`${process.env.REACT_APP_API_URL}/device/${this.state.lightOneDeviceId}`, requestOptions)
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

  //changes status on/off for light
  lightOneHandler() {
    this.lightOneUpdatedStatus()
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "device": this.state.lightOneDeviceId,
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

    fetch(`${process.env.REACT_APP_API_URL}/device/status`, requestOptions)
      .then(response => response.text())
      // .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }

  lightTwoUpdatedStatus() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_API_URL}/device/${this.state.lightTwoDeviceId}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        this.setState(() => {
          return {
            lightTwo: result.statusBooleanValue
          }
        })
      })
      .catch(error => console.log('error', error));
  }

  //changes status on/off for light
  lightTwoHandler() {
    this.lightTwoUpdatedStatus()
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "device": this.state.lightTwoDeviceId,
      "statusValue": "non",
      "statusBooleanValue": !this.state.lightTwo,
      "statusType": "digital"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_API_URL}/device/status`, requestOptions)
      .then(response => response.text())
      // .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }


  lightWorkbenchUpdatedStatus() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_API_URL}/device/${this.state.lightWorkbenchDeviceId}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        this.setState(() => {
          return {
            lightWorkBench: result.statusBooleanValue
          }
        })
      })
      .catch(error => console.log('error', error));
  }

  //changes status on/off for light
  lightWorkbenchHandler() {
    this.lightWorkbenchUpdatedStatus()
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "device": this.state.lightWorkbenchDeviceId,
      "statusValue": "non",
      "statusBooleanValue": !this.state.lightWorkBench,
      "statusType": "digital"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_API_URL}/device/status`, requestOptions)
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
          <div className='card-item-header'>
            <h3>Lights</h3>
          </div>
          <a href=""
            className='button'
            aria-disabled='true'
            onClick={(e) => {
              e.preventDefault()
              // this.lightOneHandler()
              this.temperatureUpdate()
            }}
          >
            <FaLightbulb className={this.state.lightOne ? 'iconStatusOn' : 'iconStatusOff'} />
            {'\u00A0'}Light 1 {this.state.lightOne ? ' = On' : ' = Off'}
          </a>

          <a href=""
            className='button'
            onClick={(e) => {
              e.preventDefault()
              this.lightTwoHandler()
            }}
          >
            <FaLightbulb className={this.state.lightTwo ? 'iconStatusOn ' : 'iconStatusOff '} />
            {'\u00A0'}Light 2 {this.state.lightTwo ? ' = On' : ' = Off'}
          </a>

          <a href=""
            className='button'
            onClick={(e) => {
              e.preventDefault()
              this.lightWorkbenchHandler()
            }}
          >
            <FaLightbulb className={this.state.lightWorkBench ? 'iconStatusOn ' : 'iconStatusOff '} />
            {'\u00A0'}Work Bench {this.state.lightWorkBench ? ' = On' : ' = Off'}
          </a>
          {/*turn all lights in the component off*/}
          {this.state.lightOne === true || this.state.lightTwo === true || this.state.lightWorkBench ? <a href=""
            className='button'
            aria-disabled='true'
            onClick={(e) => {
              e.preventDefault()
              if (this.state.lightOne === true) {
                this.lightOneHandler()
              }
              if (this.state.lightTwo === true) {
                this.lightTwoHandler()
              }
              if (this.state.lightWorkBench === true) {
                this.lightWorkbenchHandler()
              }

            }}
          >
            {'\u00A0'}Switch All Off {/*when any light is on it is the 'a' tag is enable */}
          </a> :
            <p className='button'>Switch All Off</p>} {/*when any light is on it is the 'a' tag is disable */}
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
