import React, { useState } from "react"
import memesData from "../memeData.js"

/**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */

function Meme() {

    const [memeImage, setMemeImage] = useState("");


    function generateImg() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text" />
                <input type="text" className="form--input" placeholder="Bottom text " />
                <button type="submit" className="form--button" onClick={generateImg}>Get a new meme image</button>
            </div>

            <img src={memeImage} className="memes--image" />

        </main>
    )
}

export default Meme