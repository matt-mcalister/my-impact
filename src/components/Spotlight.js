import React from "react"

const Spotlight = (props) => {
	return (
    <div className="spotlight">
      <div className="img-container-centered spotlight-image">
        <img src={props.image} alt={props.title} />
      </div>
			<a className="spotlight-link" href={props.website}>Visit Website</a>
			<div className="spotlight-info">
				<h2 className="spotlight-title">{props.title}</h2>
				<h6 className="spotlight-category">{props.category}</h6>
				<p className="spotlight-description">{props.description}</p>
			</div>
    </div>
)
}

export default Spotlight
