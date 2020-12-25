import React, {Component} from 'react'


class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            topText:"",
            downText:"",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]

        }

        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(event){
        const { name, value}=event.target
        this.setState({
            [name]:value

        })
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
               const {memes} = response.data
               
                this.setState({ allMemeImgs: memes })
            })
    }
    /*handleSubmit(event) {
        event.prevenDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }*/

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }



    render(){
        return(<div>
            <form className="meme-form" onSubmit={this.handleSubmit}>
       <input type="text" name="topText" value={this.state.topText} placeholder="toptext" onChange={this.handleChange}/>
       <input type="text" name="downText" value={this.state.downText} placeholder="downtext" onChange={this.handleChange}/>
       <button>submit</button>
       </form>
       <div className="meme">
       <img  src={this.state.randomImg} alt="andom"/>
       <h2 className="top">{this.state.topText}</h2>
       <h2 className="bottom">{this.state.downText}</h2>

       </div>
        </div>)
    }

}


export default MemeGenerator