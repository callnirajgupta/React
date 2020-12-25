import React ,{useState,useEffect} from "react"
const Context= React.createContext();


function ThemeContextProvider(props){
 const [photo,setPhoto]=useState([])
  const [cartItems,setCartItmes]=useState([])

 function toggleFavorite(id){
   console.log("clicked")
     const updatedArr=photo.map(photodata=> {
        if(photodata.id ===id){
            console.log(id)
                console.log(photodata.isFavorite)
            return {
                ...photodata, isFavorite: !photodata.isFavorite
            }
        }
        return photodata
        } )
        setPhoto(updatedArr)
 }

 function addImage(newItems){
     console.log("photo",newItems.id)
    setCartItmes(prevState=>[...prevState,newItems])
   
 }
 function removeItem(addedItems){
    const updatedArray = cartItems.filter((item) => item.id !== addedItems.id);

    setCartItmes(updatedArray)
 }

 function emptyCart(){
    setCartItmes([])
   

 }
 console.log(cartItems)
useEffect(()=>{

    
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(response=>response.json())
        .then(data=>{
           
            setPhoto(data)
        })
         
   
 

},[])
    return(
        
        <Context.Provider value={{photo,toggleFavorite,addImage,cartItems,removeItem,emptyCart}}>
        {props.children}
        </Context.Provider>
    )
}
export  {ThemeContextProvider , Context} 