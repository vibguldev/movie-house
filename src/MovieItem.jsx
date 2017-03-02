import React, { Component } from 'react'
const moment = require('moment')
class MovieItem extends Component {
  constructor() {
    super()
    this.colorCode = {
      1: { 'color': 'red' },
      2: { 'color': 'red' },
      3: { 'color': 'blue' },
      4: { 'color': 'blue' },
      5: { 'color': 'green' }
    }
  }

  sideBarColor(theme) {
    return { 'backgroundColor': theme }
  }
  render() {
    const name = this.props.movieDetails.name
    const rating = this.props.movieDetails.rating
    const description = this.props.movieDetails.description
    const actors = this.props.movieDetails.actors
    const releaseDate = moment(this.props.movieDetails.releaseDate).format('Do MMMM YYYY')
    const theme = this.props.movieDetails.theme
    return (
      <li id='movie'>
        <section className='movieDetail'>
          <div className='sideThemeBar' style={this.sideBarColor(theme)} />
          <li id='firstRowInMovie'>
            <span id='movieName'>Movie Name : {name}</span>
            <span id='rating'>Rating :
              <span id='ratingValue' style={this.colorCode[rating]} > {rating}/5</span></span>
          </li><br />
          <li id='description'>Description : {description}</li><br />
          Actors :
          <li id='actors'>
            {actors.map((actor) => { return (<li>{actor}</li>) })}
          </li><br />
          <li id='releaseDate'>Release Date : {releaseDate}</li>
        </section>
      </li>
    )
  }
}

export default MovieItem
