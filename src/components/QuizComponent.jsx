import React, { Component } from 'react'
import data from  "../../resources/questions.json"

export default class QuizComponent extends Component {
  constructor(){
    super()
    this.state = {
      count:0
    }
  }

  handleNext = ()=>{
   
    if(this.state.count < 14){ 
      this.setState({
        count : this.state.count + 1
      })
    }
  }

  handlePrev = () =>{
    if(this.state.count > 0) {

      this.setState({
        count : this.state.count - 1
      })
    }
  }

  handleQuit = () =>{
    alert("Are you sure you want to exit the game?!")
  }

  render() {
    return (
      <div className ="container">
        <div className = "box">
            <h1 id='ques'>Questions</h1>
            <p id="noq">{this.state.count + 1} of 15</p>
            <p id="ques-txt">{data[this.state.count].question}</p>
            
            <div id = "chooseOne">
                <div className = "animals">{data[this.state.count].optionA}</div>
                <div className = "animals">{data[this.state.count].optionB}</div>
                <div className = "animals">{data[this.state.count].optionC}</div>
                <div className = "animals">{data[this.state.count].optionD}</div>
            </div>

            <div className = "options">
                <div className="click-btns" id = "prev" onClick={this.handlePrev}>Previous</div>
                <div className="click-btns" id = "next" onClick={this.handleNext}>Next</div>
                <div className="click-btns" id = "quit" onClick={this.handleQuit}>Quit</div>
            </div>
        </div>
      </div>
    )
  }
}
