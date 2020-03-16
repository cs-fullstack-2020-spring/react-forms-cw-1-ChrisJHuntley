import React, {Component} from 'react'
class PersonStats extends Component{
    constructor(props){
        super(props);
        this.state={ name: '',
        age: '',
        mood:''
    }
    }
    // updating state
    newEntryChange=(event)=>{
        this.setState(
            {
                name:event.target.value,
                age:event.target.value,
                mood:event.target.value

            }

        )
        
    }
    render(){
        return(
            <div> 
             <form>
                 <feildset>
                     <legend>Enter New Entry</legend>
                     <label htmlFor="myfield">Enter Name:</label>
                     <input id='myfield' onChange={this.newEntryChange}  type="text" value={this.state.name}/>
                     <label htmlFor="myfield2">Enter Age:</label>
                     <input id='myfield2' onChange={this.newEntryChange}  type="text" value={this.state.age}/>
                     <label htmlFor="myfield3">Enter Mood:</label>
                     <input id='myfield3' onChange={this.newEntryChange}  type="text" value={this.state.mood}/>
                 </feildset>
             </form>
             <div>
                 {`Name: ${this.state.name}
                 Age: ${this.state.age}
                 Mood: ${this.state.mood}`}
             </div>
             </div>
        )
    }
}
export default PersonStats