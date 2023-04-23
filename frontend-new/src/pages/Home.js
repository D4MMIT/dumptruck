import React from "react";
import './css/Home.css';
import NavBar from "../components/Navbar";

export default class Home extends React.Component 
{

    constructor(props)
    {
        super(props);    }
    


    render(){
        return(
            <>
                <NavBar />
            </>
        )
    }
}