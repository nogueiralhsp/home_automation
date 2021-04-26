import React from 'react'

class APIContent extends React.Component {

     constructor(props) {
          super(props);
          this.state = { apiResponse: "" };
     }

     callAPI() {
          // fetch("http://localhost:9000/testAPI")
          //      .then(res => res.text())
          //      .then(res => this.setState({ apiResponse: res }));
     }

     componentDidMount() {
          this.callAPI();
     }

     render() {

          return (
               <div>
                    <h2>This is my API Content</h2>
                    <p className="api-intro">
                         {this.state.apiResponse ? ` well done!!! ${this.state.apiResponse}` : `API Offline`}
                    </p>

                    {/* {this.state.visibility ? this.state.buttonText[0] : this.state.buttonText[1]} */}
               </div>
          )
     }
}
export default APIContent