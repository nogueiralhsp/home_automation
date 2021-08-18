import React from 'react'

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
                <p>Room Temperature: 25 °C</p>
                <p>Set Point: {this.state.count} °C</p>
                <a href="" className='button-test' onClick={this.handlerMinusOne}>-</a>
                <a href="" className='button-test' onClick={this.handlerAddOne}>+</a>
                <a href="" className='button-test' onClick={this.handlerReset}>Rst</a>
            </div>
        );
    }
}

export default NavigationMenu