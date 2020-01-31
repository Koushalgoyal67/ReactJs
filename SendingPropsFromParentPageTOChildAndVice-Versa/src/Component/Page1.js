import React, { Component } from 'react';
import $ from 'jquery'; 
import { Link } from 'react-router-dom'
class Page1 extends React.Component 
{
	constructor(props){
         super(props);
         this.state={
             inputText:[],
             btnText:'ADD',
             inputFieldValue:'hi',
             textIndexToBeEdit:0,
             btnType:"ADD",
             inputTextArrEditIndex:0,
         }
     }

    componentDidMount(){
        if(this.props.location.inputTextArrEditIndex != undefined){
            this.setState({
                inputText:this.props.location.inputText
            });
            this.edit(this.props.location.inputTextArrEditIndex);
            console.log("value to edit ",this.props.location.inputText)
            $('#inputText').val(this.props.location.inputText[this.props.location.inputTextArrEditIndex]);
        }       
    } 
    addText(event){
        this.setState({
            inputText:this.state.inputText.concat($('#inputText').val())
        });
        $('#inputText').val('');
    } 
    handleText(){
        if(this.state.btnType=="EDIT")
            this.editText();
        else
            this.addText();    
    }

    editText(){
        this.state.inputText[this.state.textIndexToBeEdit]=$('#inputText').val();
        $('#inputText').val('');
        this.setState({
            inputText:this.state.inputText,
            btnText:'ADD',
            btnType:"ADD"
        });
    }

    edit(index){
        this.setState({
            btnType:"EDIT",
            btnText:"EDIT",
            textIndexToBeEdit:index
        });
    }

render() 
 {

   return ( 
    <div className="row ">
        <div className="col-sm-4 p-5">
            <input  className="p-2"type="text" id="inputText" placeHolder="Enter Text"/>
        </div>
        <div className="col-sm-4">
            <button className="btn btn-primary" id="btn" onClick={() => this.handleText()}>{this.state.btnText}</button>
        </div>
        <div className="col-sm-4">
            <div>
                <Link to={{
                    pathname:'/page2',
                    inputText:this.state.inputText,
                    edit:(index)=> this.edit(index),
                    removeText:(index) => this.remove(index),
                }}>Show List</Link>
            </div>
        </div>
    </div>
   )
 }
}
export default Page1;