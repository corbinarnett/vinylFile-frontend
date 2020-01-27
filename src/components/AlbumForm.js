import React, { Component } from "react";
import { connect } from "react-redux";
import { createAlbum } from "../actions/albumActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {Redirect} from 'react-router-dom'



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
        {/* <fieldset>
          <h3>Album Form</h3>
          <form onSubmit={this.handleSubmit}>
            <label>Album Name: </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />{" "}
            <br />
            <br />
            <label>Artist: </label>
            <input
              type="text"
              placeholder="Artist"
              name="artist"
              value={this.state.artist}
              onChange={this.handleChange}
              required
            />{" "}
            <br />
            <br />
            <label>Recording Label: </label>
            <input
              type="text"
              placeholder="Label"
              name="label"
              value={this.state.label}
              onChange={this.handleChange}
              required
            />{" "}
            <br />
            <br />
            <label>Release Date: </label>
            <input
              type="text"
              placeholder="Date"
              name="release_date"
              value={this.state.release_date}
              onChange={this.handleChange}
              required
            />{" "}
            <br />
            <br />
            <label>Image URL: </label>
            <input
              type="text"
              placeholder="URL"
              name="image_url"
              value={this.state.image_url}
              onChange={this.handleChange}
              required
            />{" "}
            <br />
            <br />
            <input type="submit" />
          </form>
        </fieldset> */}
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
