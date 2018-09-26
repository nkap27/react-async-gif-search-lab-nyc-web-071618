import React from 'react'

class GifList extends React.Component{

  render(){
    const threeGifs = this.props.gifs.map(gif=>{
      return <li><img alt="" key={gif.id} src={gif.images.original.url}/></li>
    })
    return(
      <ul>
        {threeGifs}
      </ul>
    )
  }

}

export default GifList
