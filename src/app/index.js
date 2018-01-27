import React from "react";
import { render } from "react-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";
//Create a component
class App extends React.Component {
    //Set a constructor to an initial state
    constructor() {
        super();
        this.state = {
            homeLink: "Home"
        };
    }
    onGreet() {
        alert("Hello");
    }
    onChangedLinkName(newName) {
        this.setState({
            homeLink: newName
        })
    }
        render() {
           
            return ( 
                <div className="container">
                 <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">             
                       <Header homeLink={this.state.homeLink}/>
                     </div>
                   </div>
                   <div className="row">
                    <div className="col-xs-10 col-xs-offset-1"> 
                    <Home 
                    name={"Max"} 
                    initialAge={27} 
                    greet={this.onGreet}
                    changeLink={this.onChangedLinkName.bind(this)}
                    initialLinkName={this.state.homeLink}
                    />
                    
                    </div>
                    </div>                    
                </div>
            );
        }
    }
    //The place to render it, the app is the name of the class.
render(<App/> , window.document.getElementById("app"));