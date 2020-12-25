import React,{useContext,useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems,emptyCart}=useContext(Context)
    const [orderText,setOrderText]=useState("Place Order")
    const cartElement= cartItems.map(element=>(
        <CartItem key={element.id} item={element}/>
    ))
    const cost=cartItems.length*5.99
     const totalCost=cost.toLocaleString("en-US", {style: "currency", currency: "USD"})

     function handleClick(){
        setOrderText("Ordering...")
         setTimeout(()=>{
             console.log("order placed")
             setOrderText("Place Order")
             emptyCart();
        },3000)
     }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartElement}
            <p className="total-cost">Total: {totalCost}</p>
            <div className="order-button">
                <button onClick={handleClick} style={{display:cartItems.length>0?"block":"none"}}>{orderText}</button>
                </div>
        </main>
    )
}

export default Cart