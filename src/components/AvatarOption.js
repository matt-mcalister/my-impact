import React from "react"

const AvatarOption = (props) => {
	console.log(props);
		return (
      <div className="avatar-option">
        <img src={props.image} alt={props.image} />
      </div>
  )
}

export default AvatarOption
