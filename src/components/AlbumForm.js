import React, { Component } from "react";
import { connect } from "react-redux";
import { createAlbum } from "../actions/albumActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";



class AlbumForm extends Component {
  state = {
    name: "",
    artist: "",
    label: "",
    release_date: "",
    image_url: "",
  };

  handleChange = event => {
    this.setState({
      // without brackets this would try to give our state a key of "event.target.name", brackets allow evaluation of what is inside
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createAlbum(this.state);
    this.setState({
      name: "",
      artist: "",
      label: "",
      release_date: "",
      image_url: "",
    })
    
    
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasic">
            <Form.Label>Album Name</Form.Label>
            <Form.Control type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required/>
          </Form.Group>

          <Form.Group controlId="formBasic">
            <Form.Label>Artist</Form.Label>
            <Form.Control type="text"
              placeholder="Artist"
              name="artist"
              value={this.state.artist}
              onChange={this.handleChange}
              required/>
          </Form.Group>

          <Form.Group controlId="formBasic">
            <Form.Label>Recording Label</Form.Label>
            <Form.Control type="text"
              placeholder="Recording Label"
              name="label"
              value={this.state.label}
              onChange={this.handleChange}
              required/>
          </Form.Group>

          <Form.Group controlId="formBasic">
            <Form.Label>Release Date</Form.Label>
            <Form.Control type="text"
              placeholder="Release Date"
              name="release_date"
              value={this.state.release_date}
              onChange={this.handleChange}
              required/>
          </Form.Group>

          <Form.Group controlId="formBasic">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text"
              placeholder="Image URL"
              name="image_url"
              value={this.state.image_url}
              onChange={this.handleChange}
              required/>
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default connect(null, { createAlbum })(AlbumForm);
