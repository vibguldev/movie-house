import React, { Component } from 'react'
import MovieItem from './MovieItem.jsx'

class MovieList extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props.moviesArray)
    return (
      <ul className='movieContainer'>
        {this.props.moviesArray.map((movie) => {
          return <MovieItem movieDetails={movie} />
        })}
      </ul>
    )
  }
}

export default MovieList
