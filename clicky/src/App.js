import React, { Component } from "react";
import ColorCard from "./components/ColorCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Colors from "./Colors.json";
import "./App.css";

class App extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };

//reshuffle function: swapping logic

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  //to end game if count ==0 play if count == 1 game ends

  //count 0 increment total by 1 if count score is greater than total then top score is top score else if total is greater than top score then total is top score


  
  // handleDecrement decreases this.state.count by 1
  // handleDecrement = () => {
  //   // We always use the setState method to update a component's state
  //   this.setState({ count: this.state.count - 1 });
  // };

  // Map over this.state.Colors and render a ColorCard component for each Color object
  render() {
    return (
      <Wrapper>
        <Title>Colors</Title>
        <p className="card-text">Points: {this.state.count}</p>
        {Colors.map(Color => (
          <ColorCard
            removeColor={this.handleIncrement}
            id={Color.id}
            key={Color.id}
            image={Color.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
