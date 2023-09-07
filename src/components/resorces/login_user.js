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
                <input type="email" />
                <input type="password" />
                <div className="login_area_button">
                    <a href="" className="button_sign_in" type="submit">Sign In</a>
                </div>
                
            </div>
        );
    }
}

export default LoginUser