import React from 'react';
import Userdetails from './UserDetails';
import SatyaDetails from './SatyaDetails';
import UserContext from '../utils/context/UserContext';

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
    <UserContext.Consumer>
      {({loggedInUser}) => (
        <>
          <div>About</div>
          <Userdetails name={"satya"} location={"banglore"} company={"google"}/>
          <SatyaDetails />
          <h3>{loggedInUser}</h3>
        </>
      )}
    </UserContext.Consumer>
    </>
  )
  }
}

export default About;