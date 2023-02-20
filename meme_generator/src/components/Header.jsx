import React from "react"

function Header() {
    return (
        <header className="header">
            <img src={require("./troll.png")} alt="trollface" className="header-image" />
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">React course project - 3</h4>
        </header>
    )


}

export default Header