import React from 'react'


class NavigationMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'test of message',
            author:''
        };

    }
    componentDidMount() {
        var apiMessage = 'test'
        
        const numberTest = Math.floor(Math.random() * 1000)

        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://type.fit/api/quotes", requestOptions)
            .then(response => response.json())
            .then((result) => {
                apiMessage = result[numberTest].text

                this.setState((prevState) => {
                    return {
                        text: apiMessage
                    };
                });
            })
            .catch(error => {
                return ('error', error)
            })

    }
    render() {
        return (
            <div>
                <p>{this.state.text}</p>
            </div>
        );
    }
}

export default NavigationMenu