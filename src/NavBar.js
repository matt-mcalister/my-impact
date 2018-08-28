import React from "react";
import { connect } from "react-redux"

import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive
} from "semantic-ui-react";

const style = {
	backgroundColor: "#2b5b87",
	height: "7vh"
}

const NavBarMobile = ({
  children,
  onPusherClick,
  onToggle,
  leftVisible,
  rightVisible,
	leftItems,
	rightItems
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="push"
      icon="labeled"
      inverted
      items={leftItems}
      vertical
      visible={leftVisible}
			style={style}
			width="thin"
    />
		<Sidebar
			as={Menu}
			animation="push"
			icon="labeled"
			inverted
			items={rightItems}
			vertical
			direction="right"
			visible={rightVisible}
			width="thin"
			style={style}
		/>
    <Sidebar.Pusher
      dimmed={leftVisible || rightVisible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    >
      <Menu fixed="top" inverted style={style}>
        <Menu.Item>
          <Image size="small" src="/images/impact_official_white_large.png" />
        </Menu.Item>
        {<Menu.Item onClick={() => onToggle("left")}>
          <Icon name="sidebar" />
        </Menu.Item>}
        <Menu.Menu position="right">
          <Menu.Item as="a" icon="setting" onClick={() => onToggle("right")} />
        </Menu.Menu>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = ({ leftItems, rightItems, onToggle, rightVisible, onPusherClick, children }) => (
	<Sidebar.Pushable>
		<Sidebar
			as={Menu}
			animation="push"
			icon="labeled"
			inverted
			items={rightItems}
			vertical
			direction="right"
			visible={rightVisible}
			width="thin"
			style={style}
		/>
		<Sidebar.Pusher
			dimmed={rightVisible}
			onClick={onPusherClick}
			style={{ minHeight: "100vh" }}
		>
			<Menu fixed="top" inverted style={style}>
		    <Menu.Item>
		      <Image size="small" src="/images/impact_official_white_large.png" />
		    </Menu.Item>
		    {leftItems.map(item => <Menu.Item {...item} />)}
		    <Menu.Menu position="right">
					<Menu.Item as="a" icon="setting" onClick={() => onToggle("right")} />
		    </Menu.Menu>
		  </Menu>
			{children}
		</Sidebar.Pusher>
	</Sidebar.Pushable>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "7vh" }}>{children}</Container>
);

const Footer = (props) => (
	<Menu fixed="bottom" inverted style={{...style, height: "3vh", fontSize: "1.5vh"}}>
			<Menu.Item as="a">
				Privacy Policy
			</Menu.Item>
			<Menu.Item as="a">
				Terms of Service
			</Menu.Item>
			<Menu.Item as="a">
				Contact
			</Menu.Item>
	</Menu>
)

class NavBar extends React.Component {
  state = {
    leftVisible: false,
		rightVisible: false
  };

  handlePusher = () => {
    const { leftVisible, rightVisible } = this.state;

    if (leftVisible) this.setState({ leftVisible: false });
    if (rightVisible) this.setState({ rightVisible: false });
  };

  handleToggle = (side) => {
		if (side === "left"){
			this.setState({ leftVisible: !this.state.leftVisible });
		} else {
			this.setState({ rightVisible: !this.state.rightVisible });
		}
	}

  render() {
    const { children, leftItems, rightItems } = this.props;
    const { leftVisible, rightVisible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            leftVisible={leftVisible}
						rightVisible={rightVisible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop
						leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            leftVisible={leftVisible}
						rightVisible={rightVisible}
					>
	          <NavBarChildren>{children}</NavBarChildren>
					</NavBarDesktop>
        </Responsive>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		leftItems: state.visual.navBar.left,
		rightItems: state.visual.navBar.right
	}
}

export default connect(mapStateToProps)(NavBar)
