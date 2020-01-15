import React from 'react';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import Modal from './Modal.jsx'
import BugForm from './BugForm.jsx'
import exampleData from '../example-data/exampleData';

import '../styles/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'All',
      bugs: exampleData,
      cached: exampleData,
      toggle: false
    };
    this.fetchBugs = this.fetchBugs.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchBugs()
  }

  async fetchBugs(){
    let bugs = await fetch(`http://localhost:3000/api/bugs`).then(res => res.json())
    this.setState({ bugs, cached: bugs })
  }
  filterHandler(filter) {
    this.setState({ filter }, () => {
      let { filter: value, cached } = this.state
      if(value === 'All') return this.setState({ bugs: cached})

      let bugs = [...this.state.cached].filter(bug => bug.threatLevel === value )
      this.setState({ bugs })
    });
  }
  toggleModal(){
    this.setState((state) => ({ toggle: !state.toggle }))
  }
  async handleSubmit(form){
    let bug = await fetch(`http://localhost:3000/api/bugs`, { 
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(form)
    }).then(res => res.json())

    const bugs = [...this.state.bugs, bug]
    this.setState({ bugs, cached: bugs, toggle: !this.state.toggle })
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <table>
            <Nav
              filterHandler={this.filterHandler}
            />
            {this.state.bugs.map((bug, i) => (
              <BugTile
                bugName={bug._id}
                bugDescription={bug.description}
                reportedBy={bug.reportedBy}
                createdDate={bug.created}
                assignedTo={bug.assignedTo}
                threatLevel={bug.threatLevel}
                key={bug._id || i}
              />
            ))}
          </table>
          <button 
            onClick={this.toggleModal}
            className="btn">Create Ticket</button>
        </div>
        { this.state.toggle && 
          <Modal
            toggle={this.toggleModal}>
            <BugForm
             submit={this.handleSubmit} />
          </Modal> 
        }
      </div>
    );
  }
}

export default App;
