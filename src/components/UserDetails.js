import React from "react";
class Userdetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user : {
                login: "dummy",
                url: "dummy"
            }
        }
        console.log("first child constructor");
    }
    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/satya9912');
        const json = await data.json();
        console.log(json);
        this.setState(() => ({
            user: json
        }))
        console.log("first child componentDidMount");
    }
    render(){
        const {login, url} = this.state.user;
        return(
            <div>
                <p>{login}</p>
                <p>{url}</p>
            </div>
        )
    }
}

export default Userdetails;