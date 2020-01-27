import React from 'react';
import "./user-details.css"
import { statement } from '@babel/template';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
  console.log(this.props);
    this.state={
      name: this.props.userData.name,
      userName: this.props.userData.username,
      email: this.props.userData.email
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="user-details">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label for="name">Name</label>
            <input id="name" type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label for="userName">User Name </label>
            <input id="userName" type="text" value={this.state.userName} name="userName"  onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label for="emailAddress">Email</label>
            <input id="emailAddress" type="email" value={this.state.email} name="email"  onChange={this.handleChange}/>
          </div>
          <div>
            <button type="submit">update</button>
          </div>
        </form>
      </div>
    )
  }
}

export default UserDetails;
