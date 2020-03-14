import React, { Component } from "react";
import { moviesData } from '../moviesData';

class App extends Component {

  state = {
    movies: moviesData
  }

  render() {

    const { movies } = this.state;


    console.log(movies);
    return (
      <div>
        {movies.map(movie => {
          return <p key={movie.id} >{movie.title}</p>
        })}
      </div>
    );
  }
  
}

export default App;
