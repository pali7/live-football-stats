import React, {Component} from 'react';

export default class Home extends Component{
    render(){
        return(
            <div>
                <div id="header">
                    <img src={require("../images/icon.png")} id="img-logo"/>
                    <ul>
                        <li><a href="">Login</a></li>
                        <li><a href="">Sign Up</a></li>
                        {/* test */}
                    </ul>
                </div>
            </div>
        )
    }
}