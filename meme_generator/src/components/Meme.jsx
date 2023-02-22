import React from "react"
import memesData from "../memeData.js"

function Meme() {

    function generateImg() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        alert(url)
    }

    return (
        <main>
            <form className="form">
                <input type="text" className="form--input" placeholder="Top text" />
                <input type="text" className="form--input" placeholder="Bottom text " />
                <button type="submit" className="form--button" onClick={generateImg}>Get a new meme image</button>
            </form>
        </main>

    )
}

export default Meme