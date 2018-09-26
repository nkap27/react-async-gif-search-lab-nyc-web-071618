import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{

  state = {
    gifs: []
  }

  componentDidMount(){
    this.fetchGifs()
  }

  fetchGifs = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp=>resp.json())
    .then(data => this.setState({gifs:data.data.splice(0,3)}, () => console.log(this.state.gifs)))
  }

  render(){
    return(
      <div>
      // passing the callback as a prop
        < GifSearch fetchGifs={this.fetchGifs} />
        < GifList gifs={this.state.gifs} />
      </div>
    )
  }
}


export default GifListContainer
