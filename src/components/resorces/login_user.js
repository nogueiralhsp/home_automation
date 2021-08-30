import React from 'react'

class LoginUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'nothing for now'
        };
    }

    render() {
        return (
            <div className="login_area">
                <h4 className="under_development">login area under development...</h4>
                <input type="email" />
                <input type="password" />
                <div className="login_area_button">
                    <a href="" className="button_sign_in" type="submit">Sign In</a>
                </div>
                <h4>Don't have a user? Ok, navegate around and make contact if you have any doubt</h4>
            </div>
        );
    }
}

export default LoginUser