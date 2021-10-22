import React from "react";

class IssueItem extends React.Component{


    render(){

        return(
            <div className="card-container">
                <div className="img-container">
                    <img src={this.props.img} alt="userimg" />
                </div>
                <div className="text-container">
                    <a href={this.props.url} target="_blank" className="issue-title">
                        {this.props.title}
                    </a> 
                    <p className="labels">
                    </p> 
                </div>
            </div>    
        )
    }
}

export default IssueItem