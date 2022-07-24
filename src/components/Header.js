import React from "react";

class Header extends React.Component{


    render(){
        return(
            <header id="headerBG" className="masthead" >
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                <h1 id="headerText">Clean Blog</h1>
                                <h2 id="headerPost" className="subheading"></h2>
                                <span className="subheading" id="headerSpan">A Blog Theme by Start Bootstrap</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header