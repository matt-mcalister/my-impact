import React from "react"

class AmountDonated extends React.Component {
	state = {
    editVisible: false,
    hasBeenSet: false,
    amountDonated: 0
  }

  visibleTrue = () => {
    this.setState({
      editVisible: true,
      hasBeenSet: false,
    })
  }

  handleChange = (e) => {
    this.setState({
      amountDonated: parseFloat(e.target.value),
    })
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleSubmit(e)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      editVisible: false,
      hasBeenSet: true,
    })
    this.props.handleValueSet("amountDonated", this.state.amountDonated.toFixed(2))
  }



	render(){
		if (this.state.hasBeenSet) {
      return (<p onClick={this.visibleTrue}>${this.state.amountDonated.toFixed(2)}</p>)
    } else if (this.state.editVisible) {
      return (
        <React.Fragment>
          <input type="number" step="0.01" min="0.00" onKeyPress={this.handleKeyPress} onChange={this.handleChange} defaultValue={this.state.amountDonated.toFixed(2)}/>
          <button type="button" value={this.state.amountDonated.toFixed(2)} onClick={this.handleSubmit}>Add Donation</button>
        </React.Fragment>
        )
    } else {
      return (<p onClick={this.visibleTrue}>Add Donation</p>)
    }
	}
}

export default AmountDonated
