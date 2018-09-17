import React from "react"

import { Icon } from "semantic-ui-react"

class AmountDonated extends React.Component {
	state = {
    editVisible: false,
    hasBeenSet: false,
    amountDonated: 0
  }

  visibleTrue = () => {
    if (!this.props.addingAttribute){
      this.props.addAttribute("amountDonated")
      this.setState({
        editVisible: true,
        hasBeenSet: false,
      })
    }
  }

  handleChange = (e) => {
    const newValue = parseFloat(e.target.value)
    if (newValue > 0){
      this.setState({
        amountDonated: newValue,
      })
    }
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleSubmit(e)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.amountDonated > 0){
      this.setState({
        editVisible: false,
        hasBeenSet: true,
      })
      this.props.handleValueSet("amountDonated", this.state.amountDonated.toFixed(2))
    } else {
      this.setState({
        editVisible: false,
        hasBeenSet: false,
      })
      this.props.resetAddAttribute()
    }
  }

  cancel = (e) => {
    this.setState({
      editVisible: false,
      hasBeenSet: false,
      amountDonated: 0
    })
    this.props.handleValueSet("amountDonated", null)
  }



	render(){
		if (this.state.hasBeenSet) {
      return (<p className="new-log-attribute set" onClick={this.visibleTrue}><Icon name="dollar" color="grey" />${this.state.amountDonated.toFixed(2)}</p>)
    } else if (this.state.editVisible) {
      return (
        <React.Fragment>
          <input className="new-log-optional" type="number" step="0.01" min="0.00" onKeyPress={this.handleKeyPress} onChange={this.handleChange} defaultValue={this.state.amountDonated.toFixed(2)}/>
          <button className="new-log-optional submit" type="button" value={this.state.amountDonated.toFixed(2)} onClick={this.handleSubmit}>Add Donation</button>
          <button className="new-log-optional cancel" type="button" onClick={this.cancel}>Cancel</button>
        </React.Fragment>
        )
    } else {
      return (<p className="new-log-attribute no" onClick={this.visibleTrue}><Icon name="dollar" color="grey" />Add Donation</p>)
    }
	}
}

export default AmountDonated
