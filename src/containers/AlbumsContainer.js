import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import AlbumForm from '../components/AlbumForm'
import AlbumIndex from '../components/AlbumIndex'
import {fetchAlbums} from '../actions/fetchAlbums'
// import AlbumProfile from '../components/AlbumProfile'
import ProfileContainer from './ProfileContainer';

class AlbumsContainer extends Component {

  componentDidMount() {
    // mapDispatchtoProps gives access to this action through props
    this.props.fetchAlbums()
  }

  

  render() {
    return (
      <div>
      <Switch>
        <Route path='/albums/new' component={AlbumForm}/>
        <Route path='/albums/:id' render={(routerProps) => <ProfileContainer {...routerProps} albums={this.props.albums}/>}/>
        <Route exact path='/albums' render={(routerProps) => <AlbumIndex {...routerProps} albums={this.props.albums}/>}/>
      </Switch>
        
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(mapStatetoProps, {fetchAlbums})(AlbumsContainer)