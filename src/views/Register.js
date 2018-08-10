import React from 'react';

export default class Register extends React.Component{
    constructor (props){
        super(props);
        this.state={
            fullName:"Pali Bajracharya",
            address:"Bhaktapur",
            email:"pali.baj@gmail.com",
            phoneNo: 9811317728,
            password: "1234",
            confirmPassword: "1234"
        }
    }

    register(){
        if(this.state.fullName === ""){
            alert("Please enter your name.");
            return;
        }
        if(this.state.address===""){
            alert("please enter yor address.");
            return;
        }
        if(this.state.email===""){
            alert("please enter your email");
            return;
        }
        if(this.state.phoneNo===""){
            alert("please enter your phone no");
            return;   
        }
        if(this.state.password===""){
            alert("please enter your password");
            return;
        }
        if(this.state.confirmPassword===""){
            alert("please enter your password again");
            return;
        }
        alert("Registered!!!");
    }
    

    render(){
        return(
            <div>
                <h1>Sign Up Form </h1>
                <h3>Full name: <input type="text"
                    value={this.state.fullName}
                    onChange={e=>{this.setState({fullName: e.target.value})}}/></h3>
                    
                <h3>address:<input type="text"
                    value={this.state.address}
                    onChange={e=>{this.setState({address: e.target.value})}}/> </h3>
                <h3>E-mail:<input type="text"
                    value={this.state.email}
                    onChange={e=>{this.setState({email: e.target.value})}}/> </h3>
                <h3>phoneNo:<input type="text"
                    value={this.state.phoneNo}
                    onChange={e=>{this.setState({phoneNo: e.target.value})}}/> </h3>
                <h3>password:<input type="text"
                    value={this.state.password}
                    onChange={e=>{this.setState({password: e.target.value})}}/> </h3>
                 <h3>Confirm password:<input type="text"
                    value={this.state.confirmPassword}
                    onChange={e=>{this.setState({confirmPassword: e.target.value})}}/> </h3>
                 <h3><input type="button"
                    value="Submit"
                    onClick={this.register.bind(this)}/> </h3>
            </div>
        )
    };
}