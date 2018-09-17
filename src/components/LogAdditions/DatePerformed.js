import React from "react"

class DatePerformed extends React.Component {
	state = {
    editVisible: false,
    hasBeenSet: false,
    datePerformed: new Date()
  }

  visibleTrue = () => {
    this.setState({
      editVisible: true,
      hasBeenSet: false,
    })
  }

	isValidDate = (date) => {
	  return date instanceof Date && !isNaN(date);
	}

  handleChange = (e) => {
		console.log(e.target.value);
		if (this.isValidDate(e.target.value)){
	    this.setState({
	      datePerformed: new Date(e.target.value),
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
    this.setState({
      editVisible: false,
      hasBeenSet: true,
    })
    this.props.handleValueSet("datePerformed", this.state.datePerformed.toISOString(),)
  }



	render(){
		if (this.state.hasBeenSet) {
      return (<p onClick={this.visibleTrue}>{this.state.datePerformed.toLocaleDateString("us-en-iso8601", {month: "long", day: "numeric", year: "numeric"})}</p>)
    } else if (this.state.editVisible) {
      return (
        <React.Fragment>
          <input type="date" onKeyPress={this.handleKeyPress} onChange={this.handleChange} defaultValue={this.state.datePerformed.toISOString().split('T')[0]}/>
          <button type="button" value={this.state.datePerformed} onClick={this.handleSubmit}>Add Date</button>
        </React.Fragment>
        )
    } else {
      return (<p onClick={this.visibleTrue}>Add Date</p>)
    }
	}
}

export default DatePerformed
