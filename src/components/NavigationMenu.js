import React from 'react'
import {
  Messages, Forcast
} from '../components'

class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 25
    };

    this.handlerAddOne = this.handlerAddOne.bind(this);
    this.handlerMinusOne = this.handlerMinusOne.bind(this);
    this.handlerReset = this.handlerReset.bind(this);

  }

  handlerAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handlerMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handlerReset() {
    this.setState((prevState) => {
      return {
        count: 25
      };
    });
  }

  render() {
    return (
      <div className="resume-under-header">
        <div className="navigation-menu-message">

          <h3> Good Morning! <br /> Bom dia! </h3>
          <Messages />

        </div>
        <div className="square-box-navigation">
          <div className="navigation-squares">
            <Forcast />
          </div>
          <div className="navigation-squares">
            <h3>Thermostat SP</h3>
            <p>Temp.: {this.state.count} °C</p>
            <button onClick={this.handlerMinusOne}>-</button>
            <button onClick={this.handlerAddOne}>+</button>
            <button onClick={this.handlerReset}>Rst</button>
          </div>
          <div className="navigation-squares">
            <h3>Electrical Usage</h3>
          </div>
          <div className="navigation-squares">
            <h3>Gas Usage</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationMenu