import React from 'react';
import ReactDOM from 'react-dom';

// const reactElement = <div className="fish">Heellllooooo</div>

let text = 'Add'

const Button = ({text,icon}) => <button>{icon}{text}</button>

const domElement = document.getElementById('root')

ReactDOM.render(<div><Button text={"add"} icon={"+"}/><Button  text={"sub"}/><Button text={"mul"}icon={"+"}/></div>, domElement)