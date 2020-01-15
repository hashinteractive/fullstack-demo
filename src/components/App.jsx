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
    this.filterHandler = this.filterHandler.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
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

  render() {
    return (
      <div className="app">
        <div className="container">
          <table>
            <Nav
              filterHandler={this.filterHandler}
            />
            {this.state.bugs.map((bug) => (
              <BugTile
                bugName={bug.bugName}
                bugDescription={bug.bugDescription}
                reportedBy={bug.reportedBy}
                createdDate={bug.createdDate}
                assignedTo={bug.assignedTo}
                threatLevel={bug.threatLevel}
                key={bug.bugName}
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
            <BugForm />
          </Modal> 
        }
      </div>
    );
  }
}

export default App;
