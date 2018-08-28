import React from "react"
import { Menu } from 'semantic-ui-react'


class NavBar extends React.Component {

	render(){
    const style = {
      width: "100%",
      position: "fixed",
      top: 0
    }
		return (
      <Menu stackable style={style}>
        <Menu.Item header>
          imPACT
        </Menu.Item>

        <Menu.Item
          name='features'
          onClick={() => console.log("features")}
        >
          Features
        </Menu.Item>

        <Menu.Item
          name='testimonials'
          onClick={() => console.log("testimonials")}
        >
          Testimonials
        </Menu.Item>

        <Menu.Item name='sign-in' onClick={() => console.log("sign-in")}>
          Sign-in
        </Menu.Item>
      </Menu>
    )
	}
}

export default NavBar
