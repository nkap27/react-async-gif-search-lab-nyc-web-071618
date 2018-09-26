import React from 'react'

class GifSearch extends React.Component{
  state={
    searchTerm:""
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    }, ()=>console.log(this.state.searchTerm))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // On a submit event, it should invoke that callback prop with the value of the text input.
    this.props.fetchGifs(this.state.searchTerm)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" value={this.state.searchTerm}></input>
        </form>
      </div>
    )
  }

}

export default GifSearch
