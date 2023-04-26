import React, {useState} from 'react';
import LoginBox from './LoginBox';

import "./css/Navbar.css"

function NavBar() {
    const [isOpen,setIsOpen] = useState(false);
    const [isOpen2,setIsOpen2] = useState(false);
    var [email, setEmail] = useState(null);
    var [user, setUser] = useState("invis");
    var [loginButton, setLoginButton] = useState("visible");

    React.useEffect(() => {

        checkloggedin()
        setInterval(()=>checkloggedin(), 5000);

    },[]);

    const checkloggedin = () =>{
        const loggedInUser = localStorage.getItem("user");
        if(loggedInUser)
        {
            let j = JSON.parse(loggedInUser)['email'];
            loginButton = "invis";
            user="visible";
            email=j;
            //document.getElementById("user_email").innerText=email;
            console.log(email);
        }else{
            setEmail("null");
            setUser("invis");
            setLoginButton("visible");
        }
    }


    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const togglePopup2 = () => {
        setIsOpen2(!isOpen2);
    }
    return ( 

            <header className='navBar'>
            <a href='/' className='sand'><div className='sandwitch'></div>
            <div className='sandwitch'></div>
            <div className='sandwitch'></div></a>

            <nav>
                <ul>
                    <li className='text'>
                        <a href="/" target="_blank">Home</a>
                    </li>

                    <li className='text'>
                        <a href="#about" target="_blank">About Us</a>
                    </li>
                    <li className='text'>
                        <a href="/book" target="_blank">Book</a>
                    </li>
                    
                    <li className='divider'></li>
                    <li>
                        <a href="#" class="fa fa-facebook"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-instagram special"></a>
                    </li>

                    {/* <li className='text special'>
                        <a href="/rooms" target="_blank">Rooms</a>
                    </li>
                     */}
                    <li>
                        <div class="back">
                            <div class="button_base b03_skewed_slide_in">
                                <div>Booking</div>
                                <div></div>
                                <div>Booking</div>
                            </div>
                        </div>
                </li>

                    {/* <li>
                        <a href="contact.html" target="_blank">Contact Us</a>
                    </li> */}

                    {/* <li class="dropDown-menu">
                        <a href="service.html" target="_blank">Services</a>
                        <ul>
                            <li class="dropDown-menu">
                                <a href="service.html" target="_blank">Service 1</a>
                                <ul>
                                    <li><a href="service.html" target="_blank">Service 1.1</a></li>
                                    <li><a href="service.html" target="_blank">Service 1.2</a></li>
                                    <li><a href="service.html" target="_blank">Service 1.3</a></li>
                                </ul>                        
                            </li>
                            <li><a href="service.html" target="_blank">Service 2</a></li>
                            <li><a href="service.html" target="_blank">Service 3</a></li>
                        </ul>
                    </li> */}
                    {/* <li class="dropDown-menu text" >
                        <a href="product.html" target="_blank">Products</a>
                        <ul>
                            <li class="dropDown-menu left">
                                <a href="service.html" target="_blank">Products 1</a>
                                <ul>
                                    <li><a href="service.html" target="_blank">Products 1.1</a></li>
                                    <li class="dropDown-menu left">
                                        <a href="service.html" target="_blank">Products 1.2</a>
                                        <ul>
                                            <li><a href="service.html" target="_blank">Products 1.2.1</a></li>
                                            <li><a href="service.html" target="_blank">Products 1.2.2</a></li>
                                            <li><a href="service.html" target="_blank">Products 1.2.3</a></li>
                                        </ul> 
                                    </li>
                                    <li><a href="service.html" target="_blank">Products 1.3</a></li>
                                </ul>                        
                            </li>
                            <li><a href="service.html" target="_blank">Products 2</a></li>
                            <li><a href="service.html" target="_blank">Products 3</a></li>
                        </ul>
                    </li> */}
                </ul>
            </nav>
        </header>
        
        // <>
        //     <div className="navbar">
        //         < div className="header">

        //             <a href='/'><img className="logo" src={require('../assets/imgs/logo/ss_transparent.png')}/> </a>
        //                     <div className="header-menu">

        //                 <a href="/rooms">Browse Rooms</a>
        //                 <a href="/book">Book</a>
        //                 <a href="#">About</a>
        //                 <a href="#">Local Attractions</a>
        //     </div>
        //     <div className="header-icons">

        //         <div className={loginButton}>
        //             <input type="button" value="Login" onClick={togglePopup} /> {isOpen &&
        //             <LoginBox handleClose={togglePopup} />}
        //         </div>

        //         <div className={user} onClick={togglePopup2}>
        //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        //                 <path fill="#FFFFFF"
        //                     d="M437.02 330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521 243.251 404 198.548 404 148 404 66.393 337.607 0 256 0S108 66.393 108 148c0 50.548 25.479 95.251 64.262 121.962-36.21 12.495-69.398 33.136-97.281 61.018C26.629 379.333 0 443.62 0 512h40c0-119.103 96.897-216 216-216s216 96.897 216 216h40c0-68.38-26.629-132.667-74.98-181.02zM256 256c-59.551 0-108-48.448-108-108S196.449 40 256 40s108 48.448 108 108-48.449 108-108 108z" />
        //             </svg>

        //             {isOpen2 &&
        //             <LoginBox handleClose={togglePopup2} />}

        //         </div>
        //     </div>
        //     </div>
        //     </div>
        // </>
  );
}

export default NavBar;