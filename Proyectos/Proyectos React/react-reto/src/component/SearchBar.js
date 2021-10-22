import React from "react";

class SearchBar extends React.Component {

    state = {
        search: "",
    }


    render(){
        return(
        <div className="search-bar">

            <input className="search-input" placeholder="Buscar" name="search"
                    onChange={(event) => {
                        this.setState({search: event.target.value})
                    }}
            />

            <button className="search-button"
                    onClick={() => this.props.emitSearch(this.state.search)}     
                    >
                    Buscar
            </button>   

        </div>
        )
    }
}

export default SearchBar