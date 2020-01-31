import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
class Page2 extends React.Component 
{
	constructor(props){
        super(props);
        this.state={
            formData:''
        }
    }
    removeToFormFillPage(){
        this.props.history.push("/page1");
    }
    componentDidMount()
    {        
        axios.get(`http://localhost:8080/get/`+this.props.location.state.email)
        .then(res => {
            if(res.status == 200){
                this.setState({ formData:res.data });
                console.log(" Yupp ",this.props.location.state.email);
            }else{
                alert(" Wron wrong");
            }
        })                                    
    }
render() 
 {  console.log("page 2 props are ",this.state.formData);
    return (
    <div className="row header">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
            <h1>Your Response</h1>
            <div className="form-group">
                <label for="email">Email Address:</label>
                <p className="form-control" >{this.state.formData.email}</p> 
            </div>
            <div className="form-group">
                <label for="pwd">Password:</label>
                <p className="form-control" > {this.state.formData.password}</p>
            </div>
            <div className="form-group">
                <label for="name">Name:</label>
                <p type="text" className="form-control">{this.state.formData.name}</p> 
            </div>
            <div className="form-group">
                <label for="age">Age:</label>
                <p type="text" className="form-control" >{this.state.formData.age}</p>
            </div>
            <div className="form-group">
                <label for="address">Address:</label>
                <p type="text" className="form-control">{this.state.formData.address}</p>
            </div>
            <div className="form-group">
                <label for="phone-number">Phone Number:</label>
                <p type="text" className="form-control" >{this.state.formData.phoneNumber}</p>
            </div>
            <div className="form-group">
                <label for="pincode">Pincode:</label>
                <p type="text" className="form-control" >{this.state.formData.pincode}</p>
            </div>
            <div className="form-group">
                <label for="country-code">Country Code:</label>
                <p type="text" className="form-control" >{this.state.formData.countryCode}</p>
            </div>  
            <div>   
                <button className="btn btn-primary" onClick={()=> this.removeToFormFillPage()}>Fill Another Form</button>
            </div>  
        </div>
        <div className="col-sm-3"></div>       
	</div>
   )
 }
}
export default Page2;