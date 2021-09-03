import React from 'react'


class NavigationMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            author: ''
        };

    }
    componentDidMount() {
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
                const apiMessage = result[numberTest].text
                const apiAuthor = result[numberTest].author

                this.setState((prevState) => {
                    return {
                        text: apiMessage,
                        author: apiAuthor
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
                <p>Quote of the day: <br />{this.state.text}<br />{this.state.author}</p>
            </div>
        );
    }
}

export default NavigationMenu