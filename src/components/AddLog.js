import React from "react";
import { Icon, Modal } from 'semantic-ui-react'

class AddLog extends React.Component {

  state = {
    numHours: 0,
    datePerformed: new Date(),
    eventTitle: "",
    organizationTitle: "",
    amountDonated: 0
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addHours = () => {
    this.setState(prevState => {
      return {
        numHours: prevState.numHours+0.5
      }
    })
  }

  subtractHours = () => {
    if (this.state.numHours >= 0) {
      this.setState(prevState => {
        return {
          numHours: prevState.numHours-0.5
        }
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
  }

  addDate = () => {

  }

  render() {
    console.log(this.state);
    return (
    <Modal id="log-modal" trigger={<Icon id="add-log-button" name="plus circle" size="large"/>} closeIcon>
      <form id="new-log-form" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="numHours">{this.state.numHours} Hours</label>
          <Icon name="minus circle" onClick={this.subtractHours} />
          <Icon name="plus circle" onClick={this.addHours} />
        </div>
        <div>
          <label htmlFor="datePerformed">Date: </label>
          <input type="text" name="datePerformed" value={this.state.datePerformed} onChange={this.handleChange} />
          <br />
          <label htmlFor="eventTitle">Add Event: </label>
          <input type="text" name="eventTitle" value={this.state.eventTitle} onChange={this.handleChange} />
          <br />
          <label htmlFor="organizationTitle">Add Organization: </label>
          <input type="text" name="organizationTitle" value={this.state.organizationTitle} onChange={this.handleChange} />
          <br />
          <label htmlFor="amountDonated">Add Donation: </label>
          <input type="text" name="amountDonated" value={this.state.amountDonated} onChange={this.handleChange} />
        </div>
        <br />
        <input type="submit" value="Create" />
      </form>
    </Modal>
    )
  }
}
export default AddLog
