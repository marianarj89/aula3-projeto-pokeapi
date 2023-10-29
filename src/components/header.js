import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";
import * as headerStyles from "./header.module.css"

export default function Header() {
    return (
        <div className={headerStyles.header}>
            <img className={headerStyles.logo}src={logo} alt="logo" />
            <nav className={headerStyles.topnav}>
                <Link to = "/">.: Home :.</Link>
                <Link to = "/pokemons">Pokemons</Link>
                <Link to = "/about">Sobre nós</Link>
                <Link to = "/contact">Fale Conosco</Link>
            </nav>
        </div>
    );
}