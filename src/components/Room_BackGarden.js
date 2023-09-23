import React from 'react';
import { FaLightbulb } from 'react-icons/fa'
const UPDATE_MS = 2000

class BackGarden extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      gardenUpperLevelLightId: '6149904b2f671e0016137975', //# gardenUpperLevelLightId="6149904b2f671e0016137975"
      gardenUpperLevelLightCurrent: false,
      bbqLightsOn: false,
      lowerLevelLightsOn: false,
      hotTubCeilingLightsOn: false
    }
  }

  componentDidMount() {
    this.gardenUpperLevelLightStatus()

    this.interval = setInterval(() => {//calls for temperature on start of the page
      this.gardenUpperLevelLightStatus()
    }, UPDATE_MS);
  }

  // reads the last post from data base and updates on screen, time set on set
  gardenUpperLevelLightStatus() {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_API_URL}/device/${this.state.gardenUpperLevelLightId}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState(() => {
          return {
            gardenUpperLevelLightCurrent: result.statusBooleanValue
          }
        })
      })
      .catch(error => console.log('error', error));
  }
  gardenUpperLevelLightHandler() {
    console.log('gardenUpperLevelLightHandler')
    this.gardenUpperLevelLightStatus()
    console.log(this.state.gardenUpperLevelLightCurrent)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "device": this.state.gardenUpperLevelLightId,
      "statusValue": "non",
      "statusBooleanValue": !this.state.gardenUpperLevelLightCurrent,
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
          <h2>Garden </h2>
        </div>
        <div className='card-items'>
          <h3>Lights</h3>
          <a href=""
            className='button'
            onClick={(e) => {
              e.preventDefault()
              this.gardenUpperLevelLightHandler()
            }}
          >
            <FaLightbulb className={this.state.gardenUpperLevelLightCurrent ? 'iconStatusOn' : 'iconStatusOff'} />
            {'\u00A0'}Upper Level {this.state.gardenUpperLevelLightCurrent ? ' = On' : ' = Off'}
          </a>
          <a href=""
            className='button'
            onClick={(e) => {
              e.preventDefault()
              this.setState((prevState) => {
                return {
                  bbqLightsOn: !this.state.bbqLightsOn
                }
              })
            }}
          >
            <FaLightbulb className={this.state.bbqLightsOn ? 'iconStatusOn' : 'iconStatusOff'} />
            {'\u00A0'}BBQ Area {this.state.bbqLightsOn ? ' = On' : ' = Off'}
          </a>
          <a href=""
            className='button'
            onClick={(e) => {
              e.preventDefault()
              this.setState((prevState) => {
                return {
                  lowerLevelLightsOn: !this.state.lowerLevelLightsOn
                }
              })
            }}>
            <FaLightbulb className={this.state.lowerLevelLightsOn ? 'iconStatusOn' : 'iconStatusOff'} />
            {'\u00A0'}Lower Level {this.state.lowerLevelLightsOn ? ' = On' : ' = Off'}
          </a>
          <a href=""
            className='button'
            onClick={(e) => {
              e.preventDefault()
              this.setState((prevState) => {
                return {
                  hotTubCeilingLightsOn: !this.state.hotTubCeilingLightsOn
                }
              })
            }}
          >
            <FaLightbulb className={this.state.hotTubCeilingLightsOn ? 'iconStatusOn' : 'iconStatusOff'} />
            {'\u00A0'}Hot Tub {this.state.hotTubCeilingLightsOn ? ' = On' : ' = Off'}
          </a>
        </div>
      </div>
    );
  }
}

export default BackGarden