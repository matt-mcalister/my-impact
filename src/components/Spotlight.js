import React from "react"

//category: "organization"
// datePosted: "2018-07-08T04:04:33.828Z"
// description: "“Don’t Despair. Mobilize” Swing Left helps citizens find the swing district closest to where they live and get involved. Chose the district you would like to donate to-- and help them build a “district fund” so that whoever wins the democratic primary in the district has a financial head start and can win big in November!  "
// id: "DFuQwKUhovA1ZFeooTgX"
// image: "https://firebasestorage.googleapis.com/v0/b/impact-fee82.appspot.com/o/spotlights%2FDFuQwKUhovA1ZFeooTgX.png?alt=media&token=b967659d-0277-4b5d-a689-3f7e5ac67fac"
// title: "Swing Left"
// website: "https://secure.actblue.com/contribute/page/swingleft?refcode=home_donate"

const Spotlight = (props) => {
	return (
    <div className="spotlight">
      <div className="img-container-centered spotlight-image">
        <img src={props.image} alt={props.title} />
        <a className="spotlight-link" href={props.website}>Visit Website</a>
      </div>
      <h2 className="spotlight-title">{props.title}</h2>
      <h6 className="spotlight-category">{props.category}</h6>
      <p className="spotlight-description">{props.description}</p>
    </div>
)
}

export default Spotlight
