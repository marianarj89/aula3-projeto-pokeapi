import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "./layout.css"
import Header from "./header";
import Footer from "./footer";



export default function Layout ({ children }) {
    return (
        
        <main className="layout">
              <Header/>
            <div className="main">
                {children}
            </div>
            <Footer />
        </main>
    )
}