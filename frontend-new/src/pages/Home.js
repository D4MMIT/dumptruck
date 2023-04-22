import React from "react";
import './css/Home.css';

export default class Home extends React.Component 
{

    constructor(props)
    {
        super(props);

        this.state = {
          loadMain : false
        };

        this.initMain = this.initMain.bind(this)
    }
    
    
    initMain()
    {
        console.log("sss");
        this.setState
        ({
            loadMain: true
        })

        this.render();
    }

    

    render(){

        if(!this.loadMain)
        {
            return(
                    <>
                    <div className="logo"><img src={require("../assets/imgs/logo/ss_transparent.png")} /></div>

                    <div className="flex">
                        <div className="box-group box-group-1">
                            <div className="box box-top" onAnimationEnd={this.initMain} />
                            <div className="box box-bottom" />
                        </div>
                        <div className="box-group box-group-2">
                            <div className="box box-top" />
                            <div className="box box-bottom" />
                        </div>
                        <div className="box-group box-group-3">
                            <div className="box box-top" />
                            <div className="box box-bottom" />
                        </div>
                        <div className="box-group box-group-4">
                            <div className="box box-top" />
                            <div className="box box-bottom" />
                        </div>
                        <div className="box-group box-group-5">
                            <div className="box box-top" />
                            <div className="box box-bottom" />
                        </div>
                        <div className="box-group box-group-6">
                            <div className="box box-top" />
                            <div className="box box-bottom" />
                        </div>
                    </div>
                </>
            )
        }else{
            return(
                <div>Test</div>
            )
        }
    }
}