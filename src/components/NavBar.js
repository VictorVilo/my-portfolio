import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">

                    <NavLink to="/" exact
                     activeClassName="text-white"
                     className="inflex-flex items-center py-2 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                     // eslint-disable-next-line react/jsx-no-duplicate-props
                     activeClassName="text-red-100 bg-purple-900"
                     >
                        Victor
                    </NavLink>

                    <NavLink to="/post" className="inline-flex items-center py-3 px-3 my-2 rounded text-red-200 hover:text-green-800"
                     activeClassName="text-red-100 bg-purple-900"
                    >
                        Posts
                    </NavLink>

                    <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-2 rounded text-red-200 hover:text-green-800"
                     activeClassName="text-red-100 bg-purple-900"
                    >
                        Projects
                    </NavLink>

                    <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-2 rounded text-red-200 hover:text-green-800"
                     activeClassName="text-red-100 bg-purple-900"
                    >
                        About Me
                    </NavLink>
                </nav>

                <div className="inline-flex py-1 px-3 my-2">
                <SocialIcon url="https://linkedin.com/in/victor_vilo" className="mr-4" target="_blank" fgColor="#000" style={{ height: 35, width: 35}} bgColor="#fff" />

                </div> 
            </div>
        </header>
    )
}