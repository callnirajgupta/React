import React, {Component} from "react"


// https://swapi.co/ (old)
// https://swapi.dev/

//React Docs about Forms: practise
//https://reactjs.org/docs/forms.html
class App extends Component {
    constructor() {
        super()
        this.state = {
            value: 'coconut',
            character:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    
    handleSubmit(event){
        alert('the value'+this.state.value)
        event.defaultPrevented

    }
    
    handleChange(event){
    this.setState({
    value:event.target.value
    })

    }
    render() {
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
<label>Essay:
    <select value={this.state.value} onChange={this.handleChange}>
        <option value="apple">apple</option>
        <option value="orange">orange</option>
        <option value="coconut">coconut</option>
        </select>

</label>
<input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

export default App
