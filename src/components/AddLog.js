import React from "react";
import { Icon, Modal } from 'semantic-ui-react'
import { AmountDonated, DatePerformed, OptionalTextField } from "./LogAdditions"

class AddLog extends React.Component {

  state = {
    numHours: 0,
    datePerformed: null,
    eventTitle: null,
    organizationTitle: null,
    amountDonated: null,
    addingAttribute: false,
    open: false,
  }

  addAttribute = (attribute) => {
    this.setState({
      addingAttribute: attribute,
    })
  }

  resetAddAttribute = () => {
    this.setState({
      addingAttribute: false,
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
    if (this.state.numHours > 0) {
      this.setState(prevState => {
        return {
          numHours: prevState.numHours-0.5
        }
      })
    }
  }
  handleValueSet = (key, value) => {
    this.setState({
      [key]: value,
      addingAttribute: false,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
    this.closeModal()
  }

  formatNumber(){
    const integer = parseInt(this.state.numHours, 10)
    const decimal = this.state.numHours - integer
    return (
      <span id="num-hours-value">
        <div id="int">{integer}</div><div id="decimal">{decimal > 0 ? `.5` : "  "}</div>
      </span>
    )
  }

  openModal = () => {
    this.setState({
      open: true,
    })
  }

  closeModal = () => {
    this.setState({
      open: false,
    })
  }


  render() {
    return (
    <Modal id="log-modal" onClose={this.closeModal} trigger={<Icon id="add-log-button" onClick={this.openModal} name="plus circle" size="large"/>} open={this.state.open} closeIcon>
      <form id="new-log-form" onSubmit={this.handleSubmit}>
        <div id="new-log-hours">
          {this.formatNumber()}
          <span id="hours">Hours</span>
          <span id="hour-icons">
            <Icon className="hour-icon" color="red" name="minus circle" onClick={this.subtractHours} />
            <Icon className="hour-icon" color="green" name="plus circle" onClick={this.addHours} />
          </span>
        </div>
        <div id="new-log-attribute-container">
          <DatePerformed addingAttribute={this.state.addingAttribute} addAttribute={this.addAttribute} handleValueSet={this.handleValueSet}/>
          <OptionalTextField iconType="bullhorn" resetAddAttribute={this.resetAddAttribute} addingAttribute={this.state.addingAttribute} addAttribute={this.addAttribute} attributeKey="eventTitle" attributeText="Event" handleValueSet={this.handleValueSet}/>
          <OptionalTextField iconType="group" resetAddAttribute={this.resetAddAttribute} addingAttribute={this.state.addingAttribute} addAttribute={this.addAttribute} attributeKey="organizationTitle" attributeText="Organization" handleValueSet={this.handleValueSet}/>
          <AmountDonated resetAddAttribute={this.resetAddAttribute} addingAttribute={this.state.addingAttribute} addAttribute={this.addAttribute} handleValueSet={this.handleValueSet}/>
        </div>
        <input id="add-log-submit" type="submit" value="Create" disabled={!!this.state.addingAttribute}/>
      </form>
    </Modal>
    )
  }
}
export default AddLog
