import React from "react"
import ProgressBar from "./ProgressBar"
import Logs from "./Logs"

class Home extends React.Component {


	render(){
		return (
      <div className="main-content">
				<ProgressBar />
				<Logs />
      </div>
      )
	}
}

export default Home
