import React, {Component} from "react"

class DataFetcher extends Component {
    constructor(){
        super()
        this.state={
            loading: false,
            data: null
        }
    }
  
    
    componentDidMount() {
        this.setState({loading: true})
        fetch(this.props.url)
            .then(res => res.json())
            .then(data => this.setState({data, loading: false}))
            .catch(err=>{
                console.log(err)
            })

            
    }
    
    render() {
        const {data, loading} = this.state
        return (
            this.props.children({data, loading})
        )
    }
}

export default DataFetcher