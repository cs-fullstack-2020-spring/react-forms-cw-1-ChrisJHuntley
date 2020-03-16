
import React, {Component} from 'react'
 
import PersonStats from './PersonStats'

class Appcontainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
              
        }
    }
    // calling back child components to increment clicks
    
        
    render(){
        return (
            <div>
                <h1>
            Sanity
            </h1>
            <PersonStats/>
            </div>
    
        );
    }
}
 
export default Appcontainer