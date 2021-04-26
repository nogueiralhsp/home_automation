import React from 'react'
import moment from 'moment'

class NavigationMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: `Bishop's Stortford`,
            currentTemperature: 0,
            forecast: [{
                date: 'test date',
                maxtemp_c: 0,
                mintemp_c: 0,
                daily_chance_of_rain: ''
            }],
        };

    }
    componentDidMount() {



        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=Bishop's Stortford&days=5&aqi=no&alerts=no`, requestOptions)
            .then(response => response.json())
            .then(result => {

                this.setState((prevState) => {
                    return {
                        cityName: result.location.name,
                        currentTemperature: result.current.temp_c,
                        forecast: result.forecast.forecastday.map((item) => ({

                            date: item.date,
                            mintemp_c: item.day.mintemp_c,
                            maxtemp_c: item.day.maxtemp_c,
                            daily_chance_of_rain: item.day.daily_chance_of_rain

                        }))
                    };
                });
            })
    }

    render() {
        return (
            <div className='forcast-square'>
                <div className='forcast-square-top'>
                    <h3>Current Temperature in</h3>
                    <p>{this.state.cityName} is {this.state.currentTemperature} °C</p>
                </div>
                <div className>
                    <h3>Weather Forecast</h3>
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
                            <th>Max Temp</th>{this.state.forecast.map((forecast) => <th key={forecast.date.toString()}>{forecast.maxtemp_c}°C</th>)}
                            </tr>
                            <tr>
                            <th>Rain Chance</th>{this.state.forecast.map((forecast) => <th key={forecast.date.toString()}>{forecast.daily_chance_of_rain}%</th>)}
                            </tr>
                        </tbody>

                    </table>


                </div>
            </div>
        );
    }
}

export default NavigationMenu