import React from "react"

function TodoItem(props) {
let styleconst={
    color:'red',
    textDecoration:'line-through'
}

    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed?styleconst:null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem