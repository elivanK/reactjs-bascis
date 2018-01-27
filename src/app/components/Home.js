import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props) {
        //Need to call super to execute the parent constructor.
        super();
        this.state = {
            age: props.initialAge,
            status:0
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
    }
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }
    render() {
       
        return (
            <div>
            <p>In a new Component!</p>
           <p>Your name is {this.props.name} and your age is {this.state.age}</p>
           <p>Status: {this.state.status}</p> 
           <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me oder!</button>
           </div>
        );
        
    };
}
Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number
};
