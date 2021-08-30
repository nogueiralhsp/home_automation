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
      <div className="navigation-menu">
        
      <div className="navigation-menu-message">
          <h3> Good Morning! <br /> Bom dia! </h3>
          <Messages />
        </div>

        <div className="header-forcast">
          <Forcast />
        </div>
      </div>
    );
  }
}

export default NavigationMenu