import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const loginAction = (username, password) => {
  return axios.post('/login', {username, password}).then((response) => response.data);
}

const getMessage = () => {
  return axios.get('/getdata').then((response) => console.log(response.data));
}

export default class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  componentWillMount = () => {
    getMessage();
  };
  
  
  onChanged = (event) => {
    //Get data from form data
    let name = event.target.name;
    let value = event.target.value;

    //Set data to state
    this.setState({
      [name]: value
    });
  }

  onSubmit = () => {
    const {username, password} = this.state;
    loginAction(username, password).then((response) => console.log(response));
  }

  render() {
    return (
      <div className="container">
        <div className="col-4 center">  
          <h2>Login form</h2>
          <form>
            <div className="form-group">
              <label>Email address</label>
              <input onChange={(event) => {this.onChanged(event)}} type="email" name="username" className="form-control" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input onChange={(event) => {this.onChanged(event)}} type="password" name="password" className="form-control"/>
            </div>
            <button type="reset" onClick={() => {this.onSubmit()}} className="btn btn-primary">Submit</button>
          </form>
        </div>
    </div>
    );
  }
}
