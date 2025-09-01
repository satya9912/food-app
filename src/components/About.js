import React from 'react';
import Userdetails from './UserDetails';
import SatyaDetails from './SatyaDetails';

class About extends React.Component {
  constructor(){
    super();
    console.log("parent constructor");
  }
  async componentDidMount(){
        console.log("parent componentDidMount");
    }
  render(){
    console.log("parent render");
     return (
    <>
    <div>About</div>
    <Userdetails name={"satya"} location={"banglore"} company={"google"}/>
    <SatyaDetails />
    </>
  )
  }
}

export default About;