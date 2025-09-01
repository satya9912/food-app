import React from "react";
class SatyaDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 1
        }
        console.log("second child constructor");
    }
    componentDidMount(){
        console.log("second child componentDidMount");
    }
    render(){
        console.log("second child render");
        const {name, location, company} = this.props;
        const {count} = this.state;
        return(
            <div>
                <h1>count : {count}</h1>
                <button onClick={() => (
                    this.setState((prevState) => ({
                    count: prevState.count + 1
                }))
                )}>count increment</button>
                <p>{name}</p>
                <p>{location}</p>
                <p>{company}</p>
            </div>
        )
    }
}

export default SatyaDetails;