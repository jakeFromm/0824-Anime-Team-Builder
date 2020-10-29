import './App.css';
import Characters from "./Containers/Characters"
import Team from "./Containers/Team"
import React from "react"

class App extends React.Component {
  state = {
    team: []
  }
  clickHandler = (character) => {
    // how to pass character to Team
    let copiedArray = [character, ...this.state.team]
    this.setState(() => ({team: copiedArray}))
  }
  render(){
    return (
      <div className="App">
        <Team characters={this.state.team}/>
        <Characters clickHandler={this.clickHandler} />
      </div>
    );
  }
}

export default App;
