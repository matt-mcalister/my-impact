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
  }


  render() {
    console.log(this.state);
    return (
    <Modal id="log-modal" trigger={<Icon id="add-log-button" name="plus circle" size="large"/>} closeIcon>
      <form id="new-log-form" onSubmit={this.handleSubmit}>
        <div id="new-log-hours">
          <label htmlFor="numHours">{this.state.numHours} Hours</label>
          <Icon name="minus circle" onClick={this.subtractHours} />
          <Icon name="plus circle" onClick={this.addHours} />
        </div>
        <div id="new-log-attributes">
          <DatePerformed addingAttribute={this.state.addingAttribute} addAttribute={this.addAttribute} handleValueSet={this.handleValueSet}/>
          <br />
          <OptionalTextField resetAddAttribute={this.resetAddAttribute} addingAttribute={this.state.addingAttribute} addAttribute={this.addAttribute} attributeKey="eventTitle" attributeText="Event" handleValueSet={this.handleValueSet}/>
          <br />
          <OptionalTextField resetAddAttribute={this.resetAddAttribute} addingAttribute={this.state.addingAttribute} addAttribute={this.addAttribute} attributeKey="organizationTitle" attributeText="Organization" handleValueSet={this.handleValueSet}/>
          <br />
          <AmountDonated resetAddAttribute={this.resetAddAttribute} addingAttribute={this.state.addingAttribute} addAttribute={this.addAttribute} handleValueSet={this.handleValueSet}/>
        </div>
        <input type="submit" value="Create" disabled={!!this.state.addingAttribute}/>
      </form>
    </Modal>
    )
  }
}
export default AddLog
