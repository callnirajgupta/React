import React from 'react'
import randomColor from 'randomcolor'


class App extends React.Component {
    constructor(){
        super()
        this.state={
            count:0,
            color:""
        }
   this.myClick=this.myClick.bind(this) 
   this.myClickDouble=this.myClickDouble.bind(this) 
   this.myClickHalf=this.myClickHalf.bind(this) 
    }
     myClick(){
         this.setState((preState)=>{

            return{
               count:preState.count+1 
            }

         })
     }
     myClickDouble(){
        this.setState((preState)=>{

           return{
              count:preState.count*2 
           }

        })
    }

    myClickHalf(){
        this.setState((preState)=>{

           return{
              count:preState.count/2 
           }

        })
    }
   

    componentDidUpdate(preProps,preState){
       if(preState.count !=this.state.count){
          let newcolor =  randomColor()
          this.setState({color:newcolor})
       }

    }
    render(){

            return (<div>
               <h1 style={{color:this.state.color}}>{this.state.count}</h1>
               <button onClick={this.myClick}>Change!</button>
               <button onClick={this.myClickDouble}>Changedouble</button>
               <button onClick={this.myClickHalf}>Changehalf</button>
            </div>)
    }
  

}

export default App