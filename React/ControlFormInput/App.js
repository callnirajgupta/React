import React, {Component} from "react"


// https://swapi.co/ (old)
// https://swapi.dev/

//React Docs about Forms: practise
//https://reactjs.org/docs/forms.html
class App extends Component {
    constructor() {
        super()
        this.state = {
            value: '',
            character:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    
    handleSubmit(event){
        alert('the value'+ this.state.value)
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
<label>
    <input type="text" value={this.state.value} onChange={this.handleChange}/>
</label>
<input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

export default App
