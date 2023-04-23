import React from "react";
import { DateRangePicker, Navbar } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './css/Book.css'
import axios from "axios";
import { Navigate } from 'react-router-dom';
import NavBar from "../components/Navbar";

const {beforeToday} =DateRangePicker;


export default class Book extends React.Component 
{
    constructor(props) 
    {
      super(props);

      const loggedInUser = localStorage.getItem("user");
      console.log(JSON.parse(loggedInUser)['email']);
      
      if (loggedInUser) 
      {
        const foundUser = loggedInUser;

        this.state= {
          date_s : [0,0,0],
          date_e : [0,0,0],
          redirect:false,
          user:foundUser,
        }
      }else{
        this.state={
          date_s : [0,0,0],
          date_e : [0,0,0],
          redirect:false,
          user:null,
        };
      }

      console.log("user: ",this.state.user);

      this.setRedirectHome = this.setRedirectHome.bind(this);
      this.getDate = this.getDate.bind(this);

    }

  

    getDate(range)
    {
        this.setState({
          date_s : [range[0].getMonth()+1,range[0].getDate(), range[0].getFullYear()],
          date_e : [range[1].getMonth()+1,range[1].getDate(), range[1].getFullYear()] 
        }, () => 
        {
          this.post_r();
        });
    }

    async post_r(){
      const api_url = "http://127.0.0.1:8000/api/v1.1.2/json/p/gar";
      let check_in_ = this.state.date_s[2].toString()+"-"+this.state.date_s[0].toString()+"-"+this.state.date_s[1].toString();
      let check_out_= this.state.date_e[2].toString()+"-"+this.state.date_e[0].toString()+"-"+this.state.date_e[1].toString();

      const post = JSON.stringify
      ({
        check_in:check_in_,
        check_out:check_out_
      });

      console.log(post);

      try {
        const res = await axios.post(api_url, post, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
        
        console.log(res.data["rooms"]);

      } catch (error) {
        alert(error);
      }
    }

    setRedirectHome()
    {
      this.setState({
        redirect: true
      })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Navigate to='/' />
        }
    } 
      

    render(){
        return(
          <>
          <NavBar />
          <div className="mcontainer">

          <div className="ss_logo" onClick={this.setRedirectHome} > <i className="fa fa-home"></i></div>
          
          {this.renderRedirect()}
          </div>
          <div className="dateRanger">
          <p>Select a time slot</p>
          <p></p>
          <DateRangePicker
            className="ranger"


            onChange={this.getDate}
            shouldDisableDate={beforeToday()}
          />
        </div>
        </>
        )
    }
}
