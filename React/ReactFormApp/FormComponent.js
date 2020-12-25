
import React from 'react'

 function FormComponent(props){

    return (<main>
        <form>
            <input  name ="firstName"  value={props.data.firstName} placeholder="First Name" onChange={props.handleChange} /><br />
            <input name="lastName" value={props.data.lastName} placeholder="Last Name" onChange={props.handleChange}/><br />
            <input name="age" value={props.data.age} placeholder="Age" onChange={props.handleChange}/><br />
            
            {/* Create radio buttons for gender here */}
            <input type="radio"  name="gender" value="male" checked={props.data.gender==="male"} onChange={props.handleChange}/>
            <label>Male</label>
            <br/>
            <input type="radio"  name="gender" value="female" checked={props.data.gender==="female"} onChange={props.handleChange}/>
            <label>Female</label>
            <br />
            
            {/* Create select box for location here */}
            
            <label>location:</label><select name="location" value={props.data.location} onChange={props.handleChange}>
            <option value="kolkta">kolkata</option>
            <option value="bangalore">bangalore</option>
            <option value="chennai">chennai</option>
            </select>
            <br />
            
            {/* Create check boxes for dietary restrictions here */}
            
            <input type="checkbox" name="veg" checked={props.data.veg} onChange={props.handleChange} />Veg
            <input type="checkbox" name="nonVeg" checked={props.data.nonVeg} onChange={props.handleChange} />Non-Veg
            <br />
            
            <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {props.data.firstName}{props.data.lastName}</p>
        <p>Your age: {props.data.age}</p>
        <p>Your gender: {props.data.gender}</p>
        <p>Your destination: {props.data.location}</p>
        <p>
            Your dietary restrictions: 
           {props.data.veg?'Veg':null}{props.data.nonVeg?', NonVeg':null}
        </p>
    </main>)
}

export default FormComponent