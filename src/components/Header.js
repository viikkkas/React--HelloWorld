import React from "react"

function Header() {
    const firstName = "Vikas";
    const lastName = "Gupta";
    return(
        <header className="navbar">{`${firstName} ${lastName}`}</header>
    )
}

export default Header;