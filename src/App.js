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

//reshuffle function: swapping logic

  // handleIncrement increases this.state.count by 1
  handleIncrement = (click) => {
    // We always use the setState method to update a component's state
    if (click === false) {
    this.setState({ count: this.state.count + 1 });
    console.log(click)
    this.score()
    this.reshuffle()
    this.setState({click: true})
    } else {
      console.log("game over")
    }
  };

  reshuffle = () => {
    //swap
//run loop
//create temp var
// temp = colors[i]
// colors[i] = colors[i+1]
// colors[i+1] = temp
//random number

//shifting array left or right

// shuffleData = data => {
//   let i = data.length - 1;
//   while (i > 0) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = data[i];
//     data[i] = data[j];
//     data[j] = temp;
//     i--;
//   }
//   return data;
// };


  }

  score = () => {
    this.setState({ score: this.state.score + 1 });
  }

  //to end game if count ==0 play if count == 1 game ends


  //count 0 increment total by 1 if count score is greater than total then top score is top score else if total is greater than top score then total is top score

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
