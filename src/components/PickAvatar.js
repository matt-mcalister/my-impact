import React from "react"
import AvatarOption from "./AvatarOption"
import { firebase } from "../firebase"
import { connect } from "react-redux"

class PickAvatar extends React.Component {
	constructor(props){
		super(props)
    this.state = {
      avatar: props.image,
      avatarImages: []
    }
	}

	componentDidUpdate(prevProps){
		if (prevProps.image !== this.props.image){
			this.setState({
				avatar: this.props.image,
			})
		}
	}

  componentDidMount(){
    firebase.db.collection("avatars").doc("lbkSDGFMtsGqvUSy2cZv").get()
      .then(doc => {
				if (doc.data()){
					this.setState({
						avatarImages: doc.data().images
					})
				}
			})
  }

	render(){
		return (
      <div className="main-content">
        <div className="logs-white-round pick-avatar">
          <h2>Pick Avatar</h2>
          <div className="img-container-centered user-img" >
            <img src={this.state.avatar} alt={this.props.name} style={{position: "inherit"}}/>
          </div>
          <div id='avatar-options'>
            {this.state.avatarImages.map(imgUrl => <AvatarOption key={imgUrl} image={imgUrl} />)}
          </div>
        </div>
      </div>
    )
	}
}

export default connect(state => ({ ...state.auth.participant }))(PickAvatar)
