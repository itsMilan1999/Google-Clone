import React from 'react'
import "./Home.css"
import { Link } from "react-router-dom"
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './search'

function Home() {
    return (
        <div className="home">

            <div className="home_header">
                <div className="home_headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home_headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    {/*Icon */}
                    <AppsIcon />
                    {/*Avater */}
                    <Avatar />
                </div>
            </div>
            <div className="home_body">
                <img src="data:image/png;base64,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" alt="" />

                <div className="home_inputContainer">
                    <Search />
                </div>
                {/* serach componet */}

            </div>

        </div>
    )
}

export default Home
