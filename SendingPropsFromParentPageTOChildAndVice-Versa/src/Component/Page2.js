import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Page2 extends React.Component 
{
	constructor(props){
        super(props);
        this.state={
            inputText:this.props.location.inputText,
        }
    }
    removeTextFromList(index){
        this.state.inputText.splice(index,1);
        this.setState({
            inputText:this.state.inputText
        })
    }
render() 
 {
    this.state.inputText=this.props.location.inputText;
    return (
    <div className="row header">
        <div className='col-sm-3'></div>
        <div className='col-sm-6'>
            {this.state.inputText.map((text,index)=>(
                <div className="row">
                    <div className='col-sm-4'>
                        <li key="index">  {text}</li>
                    </div>
                    <div className='col-sm-4'>
                        <Link to={{pathname:'/page1',inputTextArrEditIndex:index,inputText:this.state.inputText,}}>Edit</Link>
                    </div>
                    <div className='col-sm-4'>
                        <button className="btn btn-primary" onClick={()=>this.removeTextFromList(index)}> remove</button>
                    </div>
                </div>
            ))}
        </div>  
        <div className='col-sm-3'></div>         
	</div>
   )
 }
}
export default Page2;