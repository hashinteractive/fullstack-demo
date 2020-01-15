import React, { Component } from 'react'

class BugForm extends Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    let form = props.form || {
      reportedBy: '',
      assignedTo: '',
      threatLevel: 'Low-Priority',
      description: ''
    }
    this.state = {
      form
    }
  }
  handleChange(e){
    e.persist()
    this.setState(state => ({ form: { ...state.form, [e.target.name]: e.target.value } }) )
  }
  render(){
    return(
      <form onSubmit={ e => { 
        e.preventDefault()
        this.props.submit(this.state.form)
      }}>
        <div className="controls">
          <label>
            Reported By<br />
            <input
              onChange={this.handleChange}
              type="text" name="reportedBy" value={this.state.form.reportedBy} />
          </label>
        </div>
        <div className="controls">
          <label>
            Assigned To<br />
            <input 
            onChange={this.handleChange}
            type="text" name="assignedTo" value={this.state.form.assignedTo} />
          </label>
        </div>
        <div className="controls">
          <label>Threat Level</label>
          <select 
            onChange={this.handleChange}
            value={this.state.form.threatLevel}
            name="threatLevel">
            <option>Low-Priority</option>
            <option>Important</option>
            <option>Critical</option>
          </select>
        </div>
        <div className="controls">
          <label>
            Description<br />
            <textarea
            onChange={this.handleChange}
            name="description" value={this.state.form.description}></textarea>
          </label>
        </div>
        <div className="controls">
          <button className="btn" type="submit" value="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default BugForm