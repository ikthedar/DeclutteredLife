import React, { Component } from "react"; // importing from react module
import {render } from "react-dom"; // importing from react-dom module
import Homepage from "./HomePage";


// how to set up a class in React
// export default we could somewhere else, for now we are doing it right in line
// this App is the default export from this file
export default class App extends Component {
    constructor(props){ // make a constructore, it will take props
        super(props);
    }

    render() {
        return (
            <div>
                <Homepage />
            </div>
        );
        //return <h1>Welcome to DeclutteredLife</h1>;
        //return <h1>{this.props.name}</h1>; if we used props
    }
}

/* Now we need to render this above App Component inside of the div of index.html we created in templates/frontend */

/* To do this we need to access the target container, in this casee app container */
const appDiv = document.getElementById("app");
render(<App />, appDiv); // now render the App component inside of the app container

//render(<App name="ikthe" />, appDiv); If we used props