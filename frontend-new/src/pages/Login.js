import React, { useState } from 'react';
import LoginBox from '../components/LoginBox';
 
function Login() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 
  return <div>
    <input
      type="button"
      value="Login"
      onClick={togglePopup}
    />

    {isOpen && <LoginBox
    //   content={<>
    //     {/* <b>Design your Popup</b>
    //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    //     <button>Test button</button> */}
    //   </>}

      handleClose={togglePopup}
    />}
  </div>
}
 
export default Login;

// import React from "react";
// import { AnimatePresence, motion, usePresence } from "framer-motion";
// import { useState, useRef, useEffect } from "react";
// import { gsap } from "gsap";
// //import './css/Login.css';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import LoginBox from "../components/LoginBox";


// export default class  Login extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             value: this.props.defaultValue
//         };

//         this.onChange = (e) => this._onChange(e);
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.value !== this.state.value) {
//             this.props.onChange(this.state.value);
//         }
//     }

//     _onChange(e) {
//         let value = e.target.value;

//         this.setState({value: value});
//     }

//     render() {
//         return <input type="text" placeholder={this.props.placeholder} className="mm-popup__input" value={this.state.value} onChange={this.onChange} />;
//     }
// }

// /** Prompt plugin */
// Popup.registerPlugin('prompt', function (defaultValue, placeholder, callback) 
// {
//     let promptValue = null;
//     let promptChange = function (value) {
//         promptValue = value;
//     };

//     this.create({
//         title: 'What\'s your name?',
//         content: <Login onChange={promptChange} placeholder={placeholder} value={defaultValue} />,
//         buttons: {
//             left: ['cancel'],
//             right: [{
//                 text: 'Save',
//                 key: '⌘+s',
//                 className: 'success',
//                 action: function () {
//                     callback(promptValue);
//                     Popup.close();
//                 }
//             }]
//         }
//     });
// });

// /** Call the plugin */
// Popup.plugins().prompt('', 'Type your name', function (value) {
//     Popup.alert('You typed: ' + value);
// });

  
// //   export default function Login() 
// //   {
// //     const [show, setShow] = useState(false);
  
// //     return (
// //       <div className="example">
// //         <div className="controls">
// //           <motion.button

// //             whileTap={{ scale: 0.95 }}
// //             onClick={() => {
// //               setShow(!show);
// //             }}
// //           >
// //             {show ? "Hide" : "Login"}
            
// //           </motion.button>  
// //         </div>
  
// //         <AnimatePresence>{show ? <LoginBoxContainer /> : null}</AnimatePresence>
// //       </div>
// //     );
// //   }

// // function LoginBoxContainer(){
// //     const ref = useRef(null);
// //     const [isPresent, safeToRemove] = usePresence();
  
// //     useEffect(() => {
// //       if (!isPresent) {
// //         gsap.to(ref.current, {
// //           opacity: 0,
// //           onComplete: () => safeToRemove?.()
// //         });
// //       }
// //     }, [isPresent, safeToRemove]);

// //     return(
// //         //<div className="box" ref={ref}/>
// //         <LoginBox innerRef={ref}/>
// //     )
// // }
  
// // export default class Login extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
          
// //             show:true,
// //             setShow:true
// //         };

// //       }

// //     render(){
// //         return(
// //             <div className="example">
// //             <div className="controls">
// //               <motion.button
// //                 whileTap={{ scale: 0.95 }}
// //                 onClick={() => {
// //                   this.state.show=!this.state.show;
// //                   console.log(this.state.show);
// //                 }}
// //               >
// //                 {this.state.show ? "Hide" : "Show"}

// //               </motion.button>
// //             </div>
      
// //             <AnimatePresence>{this.state.show ? <Box /> : null}</AnimatePresence>
// //           </div>
// //         )
// //     }
// // }

// // function Box() 
// // {
// //   const ref = useRef(null);
// //   const [isPresent, safeToRemove] = usePresence();

// //   useEffect(() => {
// //     if (!isPresent) {
// //       gsap.to(ref.current, {
// //         opacity: 0,
// //         onComplete: () => safeToRemove?.()
// //       });
// //     }
// //   }, [isPresent, safeToRemove]);

// //   return <div className="box" ref={ref} />;
// // }