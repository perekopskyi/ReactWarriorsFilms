import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class MoviesWillWatch extends Component {

  state = {
    
  }


  render() {
    const { moviesWillWatch } = this.props;
    console.log('moviesWillWatch: ', moviesWillWatch);

    const titles = moviesWillWatch.map(movie => {
      return (
        <ListGroupItem>
          <div className="d-flex justify-content-between">
            {movie.title} <span style={{color: 'red'}}>{movie.vote_average}</span>
          </div>          
        </ListGroupItem>
      )
    })

    return (
      <>
        <h4>
          Will Watch: {moviesWillWatch.length} {moviesWillWatch.length === 1 ? 'movie' : 'movies'}
        </h4>
        <ListGroup>
            {titles}
        </ListGroup>
      </>
    );
  }
}

export default MoviesWillWatch;