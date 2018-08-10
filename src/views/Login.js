import React from 'react';

 export default class Login extends React.Component{
     constructor(props){
         super(props);
         this.state = {
             Email:"",
             password: ""
         }
     }
     render(){
         return ( 
            <div>
                 <h1> Sign In </h1>
                 <h3>E-mail:<input type="text"
                    value={this.state.email}
                    onChange={e=>{this.setState({email: e.target.value})}}/> 
                </h3>
                 <h3>password:<input type="text"
                    value={this.state.password}
                    onChange={e=>{this.setState({password: e.target.value})}}/> </h3>
                    <h3><input type="button"
                    value="login"
                    onChange={e=>{this.setState({Login: e.target.value})}}/> </h3>
            </div>
         )

     };

 }