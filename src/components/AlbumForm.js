import React, { Component } from 'react'

export default class AlbumForm extends Component {

  state = {
    name: '',
    artist: '',
    label: '',
    release_date: '',
    image_url: ''
  }

    handleChange = (event) => {
      
    }

  render() {
    return (
      <div>
        <fieldset>
          <h3>Album Form</h3>
          <form>
            <label>Album Name: </label>
            <input type='text' placeholder='Name' name='name' value={this.state.name}/> <br/><br/>
            <label>Artist: </label>
            <input type='text' placeholder='Artist' name='artist' value={this.state.artist}/> <br/><br/>
            <label>Recording Label: </label>
            <input type='text' placeholder='Label' name='label' value={this.state.label}/> <br/><br/>
            <label>Release Date: </label>
            <input type='text' placeholder='Date' name='release_date' value={this.state.release_date}/> <br/><br/>
            <label>Image URL: </label>
            <input type='text' placeholder='URL' name='image_url' value={this.state.image_url}/> <br/><br/>
            <input type='submit'/>
          </form>
        </fieldset> 
      </div>
    )
  }
}

