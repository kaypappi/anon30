import React, { Component } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import paint from "../../Assets/Rectangle.png";
import anon from "../../Assets/ANONymous.png";
import Input from "../extras/Input";
import {connect } from 'react-redux'
import {signUp} from '../../store/actions/authActions'

class SignUp extends Component {
  state = {
    name: "",

    username: "",
    email: "",
    password: "",
    Cpassword: ""
  };

  handleChange = e => {
    const field = e.target.name;
    this.setState({
      [field]: e.target.value
    });
  };

  validateFields = () => {
    if (
      this.state.name &&
      this.state.username &&
      this.state.email &&
      this.state.password &&
      this.state.Cpassword&&
      this.state.Cpassword===this.state.password
    ) {
      return true;
    } else {
      return false;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.validateFields())
    if (this.validateFields() === true) {
      this.props.signup(this.state)
      //this.props.history.push("/dashboard");
    }
  };
  render() {
    return (
      <div className="signin-wrapper">
        <div className="signin-left">
          <img src={paint} alt="" className="paint" />
        </div>
        <div className="signin-right">
          <div className="form-holder">
            <img src={anon} alt="" className="anon" />
            <p>Sending feedbacks anonymosly...</p>
            <div className="red-text center">
              {this.props.authError ? <p>{this.props.authError}</p> : null}
            </div>
            <Input
              type={"text"}
              name={"name"}
              label={"Name"}
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Input
              type={"text"}
              name={"username"}
              label={"Username"}
              value={this.state.username}
              onChange={this.handleChange}
            />
            <Input
              type={"email"}
              name={"email"}
              label={"Email"}
              value={this.state.email}
              onChange={this.handleChange}
            />

            <Input
              type={"password"}
              name={"password"}
              label={"Password"}
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Input
              type={"password"}
              name={"Cpassword"}
              label={"Confrim Password"}
              value={this.state.Cpassword}
              onChange={this.handleChange}
            />
            <p className="forgot-password">Forgot Password?</p>
            <button onClick={this.handleSubmit} className="submit">
              Sign Up
            </button>
            <p>
              Existing User? <Link to="/signin">Sign In</Link>
            </p>
          </div>
          <div className="cookie">
            <p className="cookie-notice">
              By continuing to use our website, you confirm that you have read
              and agreed to our updated Privacy Policy and Terms and Conditions
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    signup: (newUser)=>{dispatch(signUp(newUser))}
  }
}

const mapStateToProps=(state)=>{
  return{
    auth: state.auth.authError
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
