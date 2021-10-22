import React from "react";

export default class Header extends React.Component {
    render()
    {
        console.log(this.props);
        return(
        <header id="header">
            <div className="col-md-6 header-container"> 
                <div className="image-container">
                    <img src="https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg" alt="foto-perfil"></img>
                </div>
            </div>
            <div className="col-md-6 header-container-text">
                <div className="text-container">
                    <h1>{this.props.name}</h1>
                    <h3 className="ml-5">{this.props.ocupation}</h3>
                </div>
            </div>
        </header>
        )
    }
}