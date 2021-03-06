import React from "react"

import { Icon } from "semantic-ui-react"


class OptionalTextField extends React.Component {
	state = {
    editVisible: false,
    hasBeenSet: false,
    attributeValue: ""
  }

  visibleTrue = () => {
		if (!this.props.addingAttribute){
			this.props.addAttribute(this.props.attributeKey)
			this.setState({
				editVisible: true,
				hasBeenSet: false,
			})
		}
  }

  handleChange = (e) => {
    this.setState({
      attributeValue: e.target.value,
    })
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleSubmit(e)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
		if (this.state.attributeValue !== "") {
			this.setState({
				editVisible: false,
				hasBeenSet: true,
			})
			this.props.handleValueSet(this.props.attributeKey, this.state.attributeValue)
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
			attributeValue: "",
		})
		this.props.handleValueSet(this.props.attributeKey, null)
	}


	render(){
		if (this.state.hasBeenSet) {
      return (<p className="new-log-attribute set" onClick={this.visibleTrue}><Icon name={this.props.iconType} color="grey" />{this.props.attributeText}: {this.state.attributeValue}</p>)
    } else if (this.state.editVisible) {
      return (
        <React.Fragment>
          <input className="new-log-optional" type="text"  onKeyPress={this.handleKeyPress} onChange={this.handleChange} value={this.state.attributeValue}/>
          <button className="new-log-optional submit" type="button" value={this.state.attributeValue} onClick={this.handleSubmit}>Add {this.props.attributeText}</button>
					<button className="new-log-optional cancel" type="button" onClick={this.cancel}>Cancel</button>
        </React.Fragment>
        )
    } else {
      return (<p className="new-log-attribute no" onClick={this.visibleTrue}><Icon name={this.props.iconType} color="grey" />Add {this.props.attributeText}</p>)
    }
	}
}

export default OptionalTextField
