import React, { Component } from "react";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import PlanetCard from "./components/PlanetCard";
import planets from "./planets.json";
import "./App.css";

class App extends Component {
  state = {
    planets,
    score: 0,
    selectedPlanets: []
  };

  playGame = id => {
    console.log('clicked on id:', id.target.id);
    let selectedPlanetId = id.target.id;
    let selectedPlanetsCopy = this.state.selectedPlanets;

    // check if planet has already been clicked
    if (this.state.selectedPlanets.indexOf(selectedPlanetId) === -1) {
      console.log('not found in selectedplanets')
      // if not clicked, +1 to the score (up to 12)
      this.setState({score : this.state.score + 1});

      // if user wins, reset the score and selected planets
      if (this.state.score + 1 === this.state.planets.length) {
        // alert('You won');
        // reset the score
        this.setState({score : 0});
        // clear selected planets list
        this.setState({selectedPlanets : []});
      } else { // otherwise continue playing
        // add planet to list of selected planets
        selectedPlanetsCopy.push(selectedPlanetId);
        this.setState({selectedPlanets : selectedPlanetsCopy});
      }
    } else {
      console.log('found in selectedplanters')
      // if already clicked, set score to 0
      this.setState({score : 0});
      // clear selected planets list
      this.setState({selectedPlanets : []});
    }
    
    // shuffle the planets
    this.setState({planets : this.shuffle(this.state.planets)});
  }

  // ref: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle = array => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <p>Click on any image to start. Each new image clicked will increase your score by 1. Clicking on the same card will revert your score to 0.</p>
        <h2>Score: {this.state.score}</h2>
        {this.state.planets.map(planet => (
          <PlanetCard
            id={planet.id}
            name={planet.name}
            image={planet.image}
            playGame={this.playGame}
          />
        ))}

      </Wrapper>
    );
  }
}
export default App;