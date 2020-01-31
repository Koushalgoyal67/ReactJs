import React, { Component } from 'react';
import $ from 'jquery'; 
import {Redirect} from 'react-router-dom';
class Page1 extends React.Component 
{
	constructor(props){
         super(props);
         this.state={
            name:'',
            age:0,
            address:'',
            phone_number:0,
            pincode:0,
            country_code:'',
            email:'',
            password:'',
            email_alert:'',
            password_alert:'',
            phone_number_alert:'',
            pincode_alert:'',
            address_alert:'',
            country_code_alert:'',
            age_alert:'',
            name_alert:'',
        }
    }
    submitForm(event){
        event.preventDefault();
        let saveForm={
            name:this.state.name,
            age:this.state.age,
            address:this.state.address,
            phoneNumber:''+this.state.phone_number,
            pincode:this.state.pincode,
            countryCode:this.state.country_code,
            email:this.state.email,
            password:this.state.password,            
        }
        fetch('http://localhost:8080/save', {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=UTF-8','Transfer-Encoding': 'chunked' },
            body: JSON.stringify(saveForm),})
        .then(result => {if(result.status==200) {
                            console.log('success====: post Score', result);
                            var email=this.state.email;
                            console.log(" Email is ",email)
                            this.props.history.push("/page2",{email:email})
                        }else{
                            alert("Something went wrong");
                        }});
    }
    
    handleNameChange(event){
        if(!((/^[a-zA-Z\s]+$/.test(event.target.value))||event.target.value.length==0 )){
            this.setState({name_alert: 'Only Alphabets are Allowed'});
        }else{
            this.setState({name: event.target.value});
            this.setState({name_alert: ''});
        }
    }
    handleEmailChange(event){
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[A-Za-z]{2,4})+$/.test(event.target.value) || event.target.value.length==0)){
            this.setState({email_alert: "Email must be in abc@example format"});
        }else{
            this.setState({email: event.target.value});
            this.setState({email_alert: ""});
        }
    }
    handlePasswordChange(event){
        if(!(( /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(event.target.value) )|| event.target.value.length==0)){
            this.setState({password_alert: "Password must contain atleast 1 lowercase, 1 uppercase , 1 digit and of miminimum 8 length"});
        }else{
            this.setState({password: event.target.value});
            this.setState({password_alert: ""});
        }
    }
    handlePincodeChange(event){
        if(!((/^[0-9]{6}$/.test(event.target.value) ))){
            this.setState({pincode_alert: "Pincode must be of 6 digits "});
        }else{
            this.setState({pincode: event.target.value});
            this.setState({pincode_alert: ""});
        }
    }
    handleAddressChange(event){
        this.setState({address: event.target.value});
    }
    handlePhoneNumberChange(event){
        if(!((/^[0-9]{10}$/.test(event.target.value)) || event.target.value.length==0 ) ){
            this.setState({phone_number_alert: "Phone number must contain 10 digits only "});
        }else{
            this.setState({phone_number: event.target.value});
            this.setState({phone_number_alert: ""});
        }
    }
    handleAgeChange(event){
        if(!((/^[0-9]{1,3}$/.test(event.target.value) )) || event.target.value==0 || event.target.value>100){
            this.setState({age_alert: 'Age must be in 1 to 100 range'});
        }else{
            this.setState({age: event.target.value});
            this.setState({age_alert: ''});
        }
    }
    handleCountryCodeChange(event){
        if(!((/^[a-zA-Z]{2}$/.test(event.target.value) ))){
            this.setState({country_code_alert: "Country code must contain two alphabets only, like IN"});
        }else{
            this.setState({country_code: event.target.value});
            this.setState({country_code_alert: ""});
        }
    }

render() 
 {
    console.log("page 1 props are ",this.props);
   return (
    <div className="container">  
        <form onSubmit={(event) => this.submitForm(event)} >
            <div className="form-group">
                <label for="email">Email Address:</label>
                <input type="email" className="form-control" placeholder="Enter email"  onKeyUp={(event)=> this.handleEmailChange(event)} required />
                <p className="alert-danger">{this.state.email_alert}</p>
            </div>
            <div className="form-group">
                <label for="pwd">Password:</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={(event)=> this.handlePasswordChange(event)} required />
                <p className="alert-danger">{this.state.password_alert}</p>
            </div>
            <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" className="form-control" placeholder="Enter your name" onChange={(event)=> this.handleNameChange(event)} required />
                <p className="alert-danger">{this.state.name_alert}</p>
            </div>
            <div className="form-group">
                <label for="age">Age:</label>
                <input type="text" className="form-control" placeholder="Enter age"  onChange={(event)=> this.handleAgeChange(event)} required />
                <p className="alert-danger">{this.state.age_alert}</p>
            </div>
            <div className="form-group">
                <label for="address">Address:</label>
                <input type="text" className="form-control" placeholder="Enter your address"  onChange={(event)=> this.handleAddressChange(event)} required/>
            </div>
            <div className="form-group">
                <label for="phone-number">Phone Number:</label>
                <input type="text" className="form-control" placeholder="Enter your 10 digits phone number "  onChange={(event)=> this.handlePhoneNumberChange(event)} required/>
                <p className="alert-danger">{this.state.phone_number_alert}</p>
            </div>
            <div className="form-group">
                <label for="pincode">Pincode:</label>
                <input type="text" className="form-control" placeholder="Enter your pin code"  onChange={(event)=> this.handlePincodeChange(event)} required/>
                <p className="alert-danger">{this.state.pincode_alert}</p>
            </div>
            <div className="form-group">
                <label for="country-code">Country Code:</label>
                <input type="text" className="form-control" placeholder="Enter two letter Country Code"  onChange={(event)=> this.handleCountryCodeChange(event)} required/>
                <p className="alert-danger">{this.state.country_code_alert}</p>
            </div>                
            <input type="submit" className="btn btn-primary" />
        </form>    
    </div> 
   )
 }
}
export default Page1;