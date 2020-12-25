import React,{useContext,useState} from "react"
import {Context} from "../Context"
import useHover from "../hooks/useHover"

function CartItem({item}){
    const {removeItem}=useContext(Context)
    const [mouseHover,ref]=useHover()
    const iconClassName = mouseHover ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i className={iconClassName} onClick={()=>removeItem(item)} ref={ref}></i>
            <img src={item.url} width="130px" alt=""/>
            <p>$5.99</p>
    </div>)

}

export default CartItem