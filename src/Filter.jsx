import React, { Component } from 'react'

class Filter extends Component {
  displayMoviesOfActor(movieOfActors) {
    const selectedActor = document.getElementById('actorDropDown').value
    this.props.filteredMovies(movieOfActors[selectedActor])
  }


  filterMovies(moviesArray) {
    let movieOfActors = {}
    moviesArray.forEach((movie) => {
      movie.actors.forEach((actor) => {
        let actorMovies = movieOfActors[actor]
        if ((actorMovies instanceof Array) === false) {
          movieOfActors[actor] = []
          actorMovies = movieOfActors[actor]

        }
        actorMovies.push(movie)
        movieOfActors[actor] = actorMovies
      })

    })
    return movieOfActors
  }
  render() {
    let movieOfActors = this.filterMovies(this.props.moviesArray)
    return (
      <div className='filterBar'>
        Filter By Actor
        <select id='actorDropDown' onChange={this.displayMoviesOfActor.bind(this, movieOfActors)}>>
          <option>--Select Actor--</option>
          {Object.keys(movieOfActors).map((actorName) => {
            return <option value={actorName}>{actorName}</option>
          })}
        </select>
      </div>
    )
  }
}

export default Filter
