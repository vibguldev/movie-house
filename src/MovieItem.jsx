import React, { Component } from 'react'

class MovieItem extends Component {
  constructor() {
    super()
    this.colorCode = {
      1 : { 'color': 'red'},
      2 : { 'color': 'red'},
      3 : { 'color': 'blue'},
      4 : { 'color': 'blue'},
      5 : { 'color': 'green'}
    }
  }

  sideBarColor(theme) {
    return {'background-color': theme}
  }
  render() {
    console.log('name : ', this.props.movieDetails.name)
    const name = this.props.movieDetails.name
    const rating = this.props.movieDetails.rating
    const description = this.props.movieDetails.description
    const actors = this.props.movieDetails.actors
    const releaseDate = this.props.movieDetails.releaseDate
    const theme = this.props.movieDetails.theme
    // const styleForSideBar = this.sideBarColor(theme)
    console.log(rating)
    console.log(this.colorCode[rating])
    return (
      <li id='movie'>
        <section className='movieDetail'>
          <div className='sideThemeBar' style={this.sideBarColor(theme)}/>
          <li id='firstRowInMovie'>
            <span id='movieName'>Movie Name : {name}</span>
            <span id='rating'>Rating : 
              <span id='ratingValue' style={this.colorCode[rating]} >{rating}/5</span></span>
          </li>
          <li id='description'>Description : {description}</li>
          <li id='actors'>Actors : {actors.toString()}</li>
          <li id='releaseDate'>Release Date : {releaseDate}</li>
        </section>
      </li>
    )
  }
}

export default MovieItem
