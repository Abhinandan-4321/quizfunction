import React, { Component } from 'react'

export default class ResultComponent extends Component {
  render() {
    return (
        <>
        <h1 id="resultHead" style={{color: "green"}}>Result</h1>
        <div className ="">
        <div className = "box">
            <h2 className='status'>You need more practice!</h2>
            <h1 style={{color: 'blue'}}><b>Your score is 20%</b></h1>

            <div className = "endCont">
                <div>Total number of questions</div>
                <div>15</div>
            </div>

            <div className = "endCont">
                <div>Number of questions attempted</div>
                <div>9</div>
            </div>

            <div className = "endCont">
                <div>Number of correct answers</div>
                <div>3</div>
            </div>

            <div className = "endCont">
                <div>Number of wrong answers</div>
                <div>6</div>
            </div>
        </div>
        <div className="forBtns">
                <div id = "color-blue">Play Again</div>
                <div id = "color-green">Back to Home</div>
            </div>
      </div>
      </>
    )
  }
}
