import React,{useContext} from "react"
import Image from "../components/Image"
import {Context} from "../Context"
import {getClass} from "../utils"

function Photos() {
    const {photo}=useContext(Context)
    const allPhotos=photo.map((image,i)=>(
        <Image key={image.id} img={image} className={getClass(i)} />
    ))

    return (
        <main className="photos">
            {allPhotos}
        </main>
    )
}

export default Photos