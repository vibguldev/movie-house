import React, { Component } from 'react'

class Filter extends Component {


  displayMoviesOfActor(actorNameArray) {
    const selectedActor = document.getElementById('actorDropDown').value
    this.props.filteredMovies(actorNameArray[selectedActor])
  }

  render() {
    let actorNameArray = {}
    this.props.moviesArray.forEach((movie) => {
      movie.actors.forEach((actor) => {
        let actorMovies = actorNameArray[actor]
        if ((actorMovies instanceof Array) === false) {
          actorNameArray[actor] = []
          actorMovies = actorNameArray[actor]

        }
        actorMovies.push(movie)
        actorNameArray[actor] = actorMovies
      })

    })
    return (
      <div className='filterBar'>
        Filter By Actor
        <select id='actorDropDown' onChange={this.displayMoviesOfActor.bind(this, actorNameArray)}>>
          <option>--Select Actor--</option>
          {Object.keys(actorNameArray).map((actorName) => {
            return <option value={actorName}>{actorName}</option>
          })}
        </select>
      </div>
    )
  }
}

export default Filter
