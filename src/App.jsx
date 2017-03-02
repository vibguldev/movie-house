import React, { Component } from 'react'
import Filter from './Filter.jsx'
import MovieList from './MovieList.jsx'
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'
// import logo from './logo.svg';
// import './App.css';
const axios = require('axios')

class App extends Component {
  constructor() {
    super()
    this.state = { moviesDetails: '' }

  }

  componentDidMount() {
    const getMovies = () => (axios.get('https://movie-api-atlrumqzze.now.sh/movies-ref'))

    getMovies().then((response) => {
      console.log(response.data)
      this.setState({moviesDetails: response.data})
    })
  }


  render() {
    if (this.state.moviesDetails === '') {
      return <div className='loading'>loading...</div>
    }
    else {
      return (
        <div className='container'>
          <h1 id='mainTitle'>This Week's movies</h1>
          <Filter />
          <MovieList moviesArray = {this.state.moviesDetails}/>
        </div>
      )
    }
  }
}

export default App
