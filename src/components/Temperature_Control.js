import React from 'react'
import {FaArrowUp, FaArrowDown} from 'react-icons/fa'

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

    handlerAddOne(e) {
        this.setState((prevState) => {
            e.preventDefault();
            return {
                count: prevState.count + 1
            };
        });
    }

    handlerMinusOne(e) {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handlerReset(e) {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                count: 25
            };
        });
    }

    render() {
        return (
            <div className="">
                <h3>Thermostat </h3>
                <h4>Room Temperature: 25 °C</h4>
                <h4>Set Point: {this.state.count} °C</h4>
                <a href="" className='button' onClick={this.handlerMinusOne}><FaArrowDown/></a>
                <a href="" className='button' onClick={this.handlerAddOne}><FaArrowUp/></a>
                <a href="" className='button' onClick={this.handlerReset}>Rst</a>
            </div>
        );
    }
}

export default NavigationMenu