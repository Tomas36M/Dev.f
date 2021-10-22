import React from 'react';
import SearchBar from './component/SearchBar';
import IssueItem from './component/IssueItem';
import axios from 'axios';
import './App.css';

class App extends React.Component{
  state = {
    results: []
  }

  sendSearch = (search) => {
    axios.get(`https://api.github.com/repos/facebook/react/issues`)
    .then((response) => {
      const issues = response.data.filter(issue=>{
        return issue.title.includes(search)
      })
      console.log(issues);
      this.setState({results: issues})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render(){
    return(
      <div className="App">
        <SearchBar emitSearch = {this.sendSearch} />
        <div className="issue-items">
          {
            this.state.results.map ((issue) => {
              return <IssueItem title={issue.title} img={issue.user.avatar_url} url={issue.html_url} label={issue.labels} />
            })
          }
        </div>
      </div>
    )
  }
}


export default App;
