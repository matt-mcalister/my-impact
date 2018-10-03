import React from "react"

import { Popup, Menu } from "semantic-ui-react"

class Contact extends React.Component {

  state = {
    isOpen: false
  }

  handleOpen = () => {
    this.setState({ isOpen: true })

    this.timeout = setTimeout(() => {
      window.addEventListener("click", this.closePopUp)
    }, 0)
  }

  closePopUp = () => {
    this.setState({ isOpen: false }, window.removeEventListener("click", this.closePopUp))
  }

  handleClose = () => {
    this.setState({ isOpen: false })
    clearTimeout(this.timeout)
  }

  render(){
    return (
      <Popup
        trigger={<Menu.Item as='a' content='Contact' key='contact' />}
        content={(<div id="contact">
          <h2>Questions?</h2>
          <p>Contact us at: myimpact2018@gmail.com</p>
        </div>)}
        open={this.state.isOpen}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        on="click"
        position='left center'
      />
    )
  }
}

export default Contact
