import React from "react"
import { Modal } from "semantic-ui-react"
import { connect } from "react-redux"
import { removeSelectedEvent } from "../actions"


const EventShow = (props) => {
	return (
    <Modal open={!!props.selectedEvent} onClose={props.removeSelectedEvent}>
      <h3>YOOOOOOOO</h3>
    </Modal>
  )
}

export default connect(state => ({selectedEvent: state.events.selectedEvent}), { removeSelectedEvent })(EventShow)
