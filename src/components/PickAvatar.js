import React from "react"
import AvatarOption from "./AvatarOption"
import { Icon } from "semantic-ui-react"
import { firebase } from "../firebase"
import { connect } from "react-redux"
import { updateImage } from "../actions"
import FileUploader from 'react-firebase-file-uploader'


class PickAvatar extends React.Component {
	constructor(props){
		super(props)
    this.state = {
      avatar: props.image,
      avatarImages: [],
			filename: '',
			isUploading: false,
			progress: 0,
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
						avatarImages: [...new Set(doc.data().images)]
					})
				}
			})
  }

	pickAvatar = (url) => {
		this.setState({
			avatar: url
		})
	}

	handleSave = () => {
		this.props.updateImage(this.state.avatar, this.props.id)
	}

	handleUploadStart = () => {
		this.setState({isUploading: true, progress: 0})
	}

	handleProgress = (progress) => {
		this.setState({progress})
	}

	handleUploadError = (error) => {
		this.setState({isUploading: false})
		console.error(error)
	}

	handleUploadSuccess = (filename) => {
		this.setState({filename: filename, progress: 100, isUploading: false})
		firebase.storage.ref('participants').child(filename).getDownloadURL().then(url => this.setState({avatar: url}))
	}

	nameFile = (file) => {
		return this.props.id
	}

	render(){
		console.log("FROM PROPS: ", this.props.image)
		return (
      <div className="main-content">
        <div className="logs-white-round pick-avatar">
          <h2>Pick Avatar</h2>
          <div className="img-container-centered user-img" >
            <img src={this.state.avatar} alt={this.props.name} style={{position: "inherit"}}/>
          </div>
					<div id="set-photo">
						<button className="upload-button"><Icon name="photo" /></button>
						<label className="upload-button">
							<Icon name="images outline" />
							<FileUploader
							hidden
							accept="image/*"
							filename={this.nameFile}
							storageRef={firebase.storage.ref("participants")}
							onUploadStart={this.handleUploadStart}
							onUploadError={this.handleUploadError}
							onUploadSuccess={this.handleUploadSuccess}
							onProgress={this.handleProgress}
							/>
						</label>
					</div>
					<button id="save-photo" onClick={this.handleSave}>Save</button>
          <div id='avatar-options'>
            {this.state.avatarImages.map(imgUrl => <AvatarOption key={imgUrl} pickAvatar={this.pickAvatar} image={imgUrl} />)}
          </div>
        </div>
      </div>
    )
	}
}

export default connect(state => ({ ...state.auth.participant }), { updateImage })(PickAvatar)
