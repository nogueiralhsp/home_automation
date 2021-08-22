import React from 'react';
import { FaLightbulb } from 'react-icons/fa'

class BackGarden extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      upperLevelLightsOn: false,
      lowerLevelLightsOn: false,
      hotTubCeilingLightsOn: false
    }
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
              this.setState((prevState) => {
                return {
                  upperLevelLightsOn: !this.state.upperLevelLightsOn
                }
              })
            }}
          >
            <FaLightbulb className={this.state.upperLevelLightsOn ? 'iconStatusOn' : 'iconStatusOff'} />
            {'\u00A0'}Upper Level {this.state.upperLevelLightsOn ? ' = On' : ' = Off'}
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