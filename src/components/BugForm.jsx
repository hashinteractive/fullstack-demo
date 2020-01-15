import React, { Component } from 'react'

class BugForm extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <form onSubmit={this.props.handleSubmit}>
        <div className="controls">
          <label>
            Reported By<br />
            <input type="text" name="reported" value="" />
          </label>
        </div>
        <div className="controls">
          <label>
            Assigned To<br />
            <input type="text" name="assigned" value="" />
          </label>
        </div>
        <div className="controls">
          <label>Threat Level</label>
          <select name="threat">
            <option>Low-Priority</option>
            <option>Important</option>
            <option>Critical</option>
          </select>
        </div>
        <div className="controls">
          <label>
            Description<br />
            <textarea name="description" value=""></textarea>
          </label>
        </div>
      </form>
    )
  }
}

export default BugForm