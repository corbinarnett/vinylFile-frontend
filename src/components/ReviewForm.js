// import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {createReview} from '../actions/createReview'

// class ReviewForm extends Component {


//   state = {
//     username: '',
//     content: '',
//     rating: ''
//   }

//   handleChange = (event) => {
//     this.setState({
//       // without brackets this would try to give our state a key of "event.target.name", brackets allow evaluation of what is inside 
//       [event.target.name]: event.target.value
//     })
//   }

//   handleSubmit = (event) => {
//     event.preventDefault()
//     this.props.createReview(this.state, this.props.album.id)
//       this.setState({
//         username: '',
//         content: '',
//         rating: ''
//       })
//   }

//   render() {
//     return (
//       <div>
//         <fieldset>
//           <h3>New Review Form</h3>
//             <form onSubmit={this.handleSubmit}>
//               <label>Username: </label>
//               <input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.handleChange} required/> <br/><br/>
//               <label>Content: </label>
//               <textarea rows="4" cols="50" placeholder='Your Review' name='content' value={this.state.content} onChange={this.handleChange} required/> <br/><br/>
//               <label>Rating: </label>
//               <input min="1" max="10" type='number' placeholder='1-10' name='rating' value={this.state.rating} onChange={this.handleChange} required/> <br/><br/>
//               <input type="submit"/>
//             </form>
//           </fieldset>
//       </div>
//     )
//   }
// }

// export default connect(null, {createReview})(ReviewForm)

// // getting props from ProfileContainer and mapDispatchtoProps