import React from 'react';
import { FaLightbulb } from 'react-icons/fa'

class BackGarden extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      upperLevelLightsOn: false
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
          <a href="" className='button'><FaLightbulb className={true === !true ? 'iconStatusOn' : 'iconStatusOff'} /> Lower Level {true === !true ? ' = On' : ' = Off'}</a>
          <a href="" className='button'><FaLightbulb className={true ? 'iconStatusOn' : 'iconStatusOff'} /> Hot Tub {true ? ' = On' : ' = Off'}</a>
        </div>
      </div>
    );
  }
}

export default BackGarden