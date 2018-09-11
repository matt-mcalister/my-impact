import React from "react"
import { Responsive, Grid, Container, Button } from 'semantic-ui-react'

const buttonStyle = {
  backgroundColor: "#2f649c",
  color: "white"
}

const LandingMobile = (props) => {
  const mobileVideo = {

  }

  const mobileText = {

  }


  return (
    <React.Fragment>
      <iframe style={mobileVideo} title="ImPACT Video" id="aboutVideo" src="https://player.vimeo.com/video/278060639" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"></iframe>
      <div>
        <Button style={buttonStyle}>Login</Button>
        <Button style={buttonStyle}>Sign Up</Button>
        <a id="itunes-link" href="https://itunes.apple.com/us/app/my-impact/id1397266194?mt=8"><img id="appStore" src="https://get.google.com/apptips/images/app-store.svg" alt="Download on the App Store"/></a>
      </div>
      <Container style={mobileText} fluid className="landing-text" id="desktop-about">
        <p>ImPACT is about making 2018 the year we take our country back-- on our terms. The 2018 elections is going to be one of the most important voting events in history. Our democracy and our rights are under siege.  We need democrats to win big this fall and the clock is ticking.  We all live very different and fast-paced lives  — we have jobs, families, school and student loans-- all of which take up time and money. This can make political activism daunting. ImPACT will help you set an activism goal and get organized. We want to build a community that makes getting involved fun, accessible and a part of your daily, weekly, or monthly routine. ImPACT allows you to log your own hours and set personalized goals so that you can guarantee you're doing your part to help create the change you want to see. If you have a busy week — or two, or three — we get it. So one hour of your wages can be put towards one hour of activism. For each hour of your wages you donate, an hour is added to your Activist Log. So you can be flaky, tired or just blah-- and still save the world. Our candidates need time and money. Do what works for you. We’ll help you do it.</p>
        <p>So, what’s the deal with the pact? You know those 30 day fitness apps?? Well this is like that, except no sweating. You get to set the terms of your pact--from 10 hours to infinity (show up your friends and make a 400,000 hour pact!)-- and then watch as activism becomes a stress-free part of your routine. Together, our time will add up. Let’s build a community of citizens where a little bit of time is always better than nothing, and a couple of dollars is always greater than zero. We can make an Impact- Together.</p>
        <p>2018 is going to be a historical year that could alter the course of American and world history for generations. In 20, 40, or 60 years, do you want to say you sat on the sidelines, or that you fought for what you knew was right?</p>
      </Container>
    </React.Fragment>
  )
}

const LandingDesktop = (props) => {
  const desktopVideo = {

  }

  const desktopText = {

  }

  return (
    <React.Fragment>
      <iframe style={desktopVideo} title="ImPACT Video" id="aboutVideo" src="https://player.vimeo.com/video/278060639" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"></iframe>
      <div>
        <Button loading={true} style={buttonStyle}>Login</Button>
        <Button style={buttonStyle}>Sign Up</Button>
        <a id="itunes-link" href="https://itunes.apple.com/us/app/my-impact/id1397266194?mt=8"><img id="appStore" src="https://get.google.com/apptips/images/app-store.svg" alt="Download on the App Store"/></a>
      </div>
      <Container style={desktopText} fluid className="landing-text" id="desktop-about">
        <p>ImPACT is about making 2018 the year we take our country back-- on our terms. The 2018 elections is going to be one of the most important voting events in history. Our democracy and our rights are under siege.  We need democrats to win big this fall and the clock is ticking.  We all live very different and fast-paced lives  — we have jobs, families, school and student loans-- all of which take up time and money. This can make political activism daunting. ImPACT will help you set an activism goal and get organized. We want to build a community that makes getting involved fun, accessible and a part of your daily, weekly, or monthly routine. ImPACT allows you to log your own hours and set personalized goals so that you can guarantee you're doing your part to help create the change you want to see. If you have a busy week — or two, or three — we get it. So one hour of your wages can be put towards one hour of activism. For each hour of your wages you donate, an hour is added to your Activist Log. So you can be flaky, tired or just blah-- and still save the world. Our candidates need time and money. Do what works for you. We’ll help you do it.</p>
        <p>So, what’s the deal with the pact? You know those 30 day fitness apps?? Well this is like that, except no sweating. You get to set the terms of your pact--from 10 hours to infinity (show up your friends and make a 400,000 hour pact!)-- and then watch as activism becomes a stress-free part of your routine. Together, our time will add up. Let’s build a community of citizens where a little bit of time is always better than nothing, and a couple of dollars is always greater than zero. We can make an Impact- Together.</p>
        <p>2018 is going to be a historical year that could alter the course of American and world history for generations. In 20, 40, or 60 years, do you want to say you sat on the sidelines, or that you fought for what you knew was right?</p>
      </Container>
    </React.Fragment>
  )
}

const Landing = (props) => {
  const capitolWidth = (window.innerHeight * 73/100)
  return (
    <div id="landing" className="main-container">
      <div id="capitalImgContainer" style={{
        position: "absolute",
        left: "0",
      }}>
        <img id="capitalImg" src="/images/onboarding-extra-wide.png" alt="The US Capitol"/>
      </div>
      <div className="capital-flex">
        <div className="over-capital" style={{width: capitolWidth}}>
          <iframe title="ImPACT Video" id="aboutVideo" src="https://player.vimeo.com/video/278060639" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"></iframe>
          <div>
            <Button loading={true} style={buttonStyle}>Login</Button>
            <Button style={buttonStyle}>Sign Up</Button>
            <a id="itunes-link" href="https://itunes.apple.com/us/app/my-impact/id1397266194?mt=8"><img id="appStore" src="https://get.google.com/apptips/images/app-store.svg" alt="Download on the App Store"/></a>
          </div>
        </div>
        <Container style={{width: (window.innerWidth - capitolWidth)}} fluid className="landing-text side-capital" id="desktop-about">
          <p>ImPACT is about making 2018 the year we take our country back-- on our terms. The 2018 elections is going to be one of the most important voting events in history. Our democracy and our rights are under siege.  We need democrats to win big this fall and the clock is ticking.  We all live very different and fast-paced lives  — we have jobs, families, school and student loans-- all of which take up time and money. This can make political activism daunting. ImPACT will help you set an activism goal and get organized. We want to build a community that makes getting involved fun, accessible and a part of your daily, weekly, or monthly routine. ImPACT allows you to log your own hours and set personalized goals so that you can guarantee you're doing your part to help create the change you want to see. If you have a busy week — or two, or three — we get it. So one hour of your wages can be put towards one hour of activism. For each hour of your wages you donate, an hour is added to your Activist Log. So you can be flaky, tired or just blah-- and still save the world. Our candidates need time and money. Do what works for you. We’ll help you do it.</p>
          <p>So, what’s the deal with the pact? You know those 30 day fitness apps?? Well this is like that, except no sweating. You get to set the terms of your pact--from 10 hours to infinity (show up your friends and make a 400,000 hour pact!)-- and then watch as activism becomes a stress-free part of your routine. Together, our time will add up. Let’s build a community of citizens where a little bit of time is always better than nothing, and a couple of dollars is always greater than zero. We can make an Impact- Together.</p>
          <p>2018 is going to be a historical year that could alter the course of American and world history for generations. In 20, 40, or 60 years, do you want to say you sat on the sidelines, or that you fought for what you knew was right?</p>
        </Container>
      </div>
    </div>
  )
}


export default Landing
