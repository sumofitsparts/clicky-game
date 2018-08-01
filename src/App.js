import React, { Component } from "react";
import ColorCard from "./components/ColorCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Colors from "./Colors.json";
import "./App.css";

class App extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0,
    score: 0,
    click: false
  };

  handleIncrement = (click) => {
    if (click === false) {
    this.setState({ count: this.state.count + 1 });
    console.log(click)
    this.score()
    // this.reshuffle()
    
    // this.setState({click: true})
    // } else {
    //   this.setState({count: 0});
    //   alert("game over")
    }
  };

//   reshuffle = () => {
//     this.shuffleData()
//   }

// shuffleData = Color => {
//   let i = Color.length - 1;
//   while (i > 0) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = Color[i];
//     Color[i] = Color[j];
//     Color[j] = temp;
//     i--;
//   }
//   return Color;
// };


  

  score = () => {
    this.setState({ score: this.state.score + 1 });
  }

  render() {
    return (
      <Wrapper>
        <Title>Colors</Title>
        <p className="card-text">Score: {this.state.score}</p>
        <p className="card-text">Points: {this.state.count}</p>
        <br></br>
        {Colors.map(Color => (
          <ColorCard
            removeColor={this.handleIncrement}
            id={Color.id}
            key={Color.id}
            image={Color.image}
            click={this.state.click}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
