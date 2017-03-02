import React, { Component } from 'react'
import Filter from './Filter.jsx'
import MovieList from './MovieList.jsx'
import 'react-loading-bar/dist/index.css'
const axios = require('axios')

class App extends Component {
  constructor() {
    super()
    this.state = { moviesDetails: '', moviesOfActor: ''}

  }

  componentDidMount() {
    const getMovies = () => (axios.get('https://movie-api-atlrumqzze.now.sh/movies-ref'))

    getMovies().then((response) => {
      this.setState({ moviesDetails: response.data, moviesOfActor: response.data })
    })
  }

  displayFilteredMovies(filteredMovies) {
    this.setState({moviesOfActor: filteredMovies})
  }


  render() {
    if (this.state.moviesDetails === '') {
      return <div className='loading'>loading...</div>
    }
    else {
      return (
        <div className='container'>
          <h1 id='mainTitle'>This Week's movies</h1>
          <Filter moviesArray={this.state.moviesDetails} filteredMovies={this.displayFilteredMovies.bind(this)}/>
          <MovieList moviesOfActor={this.state.moviesOfActor} />
        </div>
      )
    }
  }
}

export default App
