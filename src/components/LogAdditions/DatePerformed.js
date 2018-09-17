import React from "react"

class DatePerformed extends React.Component {
	state = {
    editVisible: false,
    hasBeenSet: false,
    datePerformed: new Date()
  }

  visibleTrue = () => {
		if (!this.props.addingAttribute){
	    this.props.addAttribute("datePerformed")
	    this.setState({
	      editVisible: true,
	      hasBeenSet: false,
	    })
		}
  }

	isValidDate = (date) => {
	  return date instanceof Date && !isNaN(date);
	}

  handleChange = (e) => {
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

	cancel = (e) => {
		this.setState({
			editVisible: false,
			hasBeenSet: false,
			datePerformed: new Date()
		})
		this.props.handleValueSet("datePerformed", null)
	}



	render(){
		if (this.state.hasBeenSet) {
      return (<p className="new-log-set-attribute" onClick={this.visibleTrue}>{this.state.datePerformed.toLocaleDateString("us-en-iso8601", {month: "long", day: "numeric", year: "numeric"})}</p>)
    } else if (this.state.editVisible) {
      return (
        <React.Fragment>
          <input className="new-log-optional" type="date" onKeyPress={this.handleKeyPress} onChange={this.handleChange} defaultValue={this.state.datePerformed.toISOString().split('T')[0]}/>
          <button className="new-log-optional" type="button" onClick={this.handleSubmit}>Add Date</button>
          <button className="new-log-optional" type="button" onClick={this.cancel}>Cancel</button>
        </React.Fragment>
        )
    } else {
      return (<p className="new-log-no-attribute" onClick={this.visibleTrue}>Add Date</p>)
    }
	}
}

export default DatePerformed
