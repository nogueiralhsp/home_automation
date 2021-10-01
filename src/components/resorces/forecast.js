import React from 'react'
import moment from 'moment'

class NavigationMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherAPIisDown: true,
            cityName: ``,
            condition: {
                text: "",
                icon: "",
                code: 0
            },
            forecast: [{
                date: 'test date',
                maxtemp_c: 0,
                mintemp_c: 0,
                daily_chance_of_rain: '',
                daily_condition: {
                    text: "just test",
                    icon: "",
                    code: 0
                }
            }],
        };
    }
    componentDidMount() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=cm71ww&days=5&aqi=no&alerts=no`, requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result);
                if (!result.location) {
                    this.setState((prevState) => {
                        return {
                            weatherAPIisDown: true,
                            cityName: '\n**** forcast api down ****',
                        };
                    });
                } else {
                    this.setState((prevState) => {
                        return {
                            weatherAPIisDown: false,
                            cityName: result.location.name,
                            currentTemperature: result.current.temp_c,
                            condition: {
                                text: result.current.condition.text,
                                icon: result.current.condition.icon,
                                code: result.current.condition.code,
                            },
                            forecast: result.forecast.forecastday.map((item) => (
                                {
                                    date: item.date,
                                    mintemp_c: item.day.mintemp_c,
                                    maxtemp_c: item.day.maxtemp_c,
                                    daily_chance_of_rain: item.day.daily_chance_of_rain,
                                    daily_condition: {
                                        text: item.day.condition.text,
                                        icon: item.day.condition.icon,
                                        code: item.day.condition.code,
                                    },
                                }))
                        };
                    });
                }
            }).catch(
                this.setState((prevState) => {
                    return {
                        cityName: "API Off",
                        currentTemperature: "API Off",
                    };
                })
            )
    }

    render() {
        return (
            <div className='forcast-square'>
                <div className='forcast-square-top'>
                    <h3>Current Temperature in {this.state.weatherAPIisDown ?

                        <div>
                            {this.state.cityName}
                        </div>
                        :
                        this.state.cityName}</h3>
                    <h4>{this.state.currentTemperature} °C {this.state.condition.text}<img src={this.state.condition.icon} alt="icon" height='25px' /> </h4>

                </div>
                <div className="forcast-table-container">
                    <div className="forcast-table-title">
                        <h3>Weather Forecast Next 3 Days</h3>
                    </div>
                    <div className='forcast-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>{this.state.forecast.map((forecast) => <th key={forecast.date.toString()}>{moment(forecast.date).format('dddd')}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Min Temp</th>{this.state.forecast.map((forecast) => <th key={forecast.date.toString()}>{forecast.mintemp_c}°C</th>)}
                                </tr>
                                <tr>
                                    <th>Max Temp <br /></th>{this.state.forecast.map((forecast) => <th key={forecast.date.toString()}>{forecast.maxtemp_c}°C</th>)}
                                </tr>
                                <tr>
                                    <th>Rain Chance</th>{this.state.forecast.map((forecast) => <th key={forecast.date.toString()}>{forecast.daily_chance_of_rain}% <img src={forecast.daily_condition.icon} alt="weather icon" height='20px' /></th>)}
                                </tr>
                            </tbody>

                        </table>
                    </div>


                </div>
            </div>
        );
    }
}

export default NavigationMenu