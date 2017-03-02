import React, { Component } from 'react'
import MovieItem from './MovieItem.jsx'

class MovieList extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <ul className='movieContainer'>
        {this.props.moviesOfActor.map((movie) => {
          return <MovieItem movieDetails={movie} />
        })}
      </ul>
    )
  }
}

export default MovieList
