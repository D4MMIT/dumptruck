import React from "react";
import './css/Home.css';
import NavBar from "../components/Navbar";

export default class Home extends React.Component 
{

    constructor(props)
    {
        super(props);    
    
    }
    
    render(){
        return(
            <>
                <div className="intro">
                    <NavBar />
                    <img className="logo" src={require('../assets/imgs/logo/logo2.png')}></img>
                    <div id="scroll-down-animation">
                    <span class="mouse">
                        <span class="move"></span>
                    </span>
                    <h2>Scroll down</h2>
                    </div>
                </div>
                <div className="about">
                    <div className="roominfo">
                        <div className="textblob">
                            <h1>Welcome</h1>
                            <p>To a unique, memorable, and enjoyable experience. Our rooms
                                are tastefully decorated and equipped with modern amenities to meet all your
                                needs. Wake up to a delicious breakfast served with locally sourced ingredients,
                                and take in the beautiful views from our terrace. </p>
                        </div>
                    </div>        
                    {/* <div className="roomArea">
                        ⬜16 square feet
                    </div>
                    <div className="roomBeds">
                        🛏️1 BED
                    </div> */}
                    <div className="roompic1"></div>
                    <div className="roomdes">
                        <h1>STANDARD ROOM</h1>
                        <p>ONLY US $150</p>
                    </div>
                    <div className="roompic2"></div>
                </div>
            </>
        )
    }
}