import React from "react"

const AvatarOption = (props) => {
		return (
      <div className="avatar-option" onClick={() => props.pickAvatar(props.image)}>
        <img src={props.image} alt={props.image} />
      </div>
  )
}

export default AvatarOption
