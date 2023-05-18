import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import MapComponent from '../Map/MapComponent';

export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div>
          <p className="lead">
          <button className="btn btn-light btn-lg" onClick={this.logout}>
            Logout
          </button>
            You have entered the staff portal,{' '}
            <MapComponent></MapComponent>
            <Link to="/staff">click here</Link>
          </p>
          <map google={this.props.google} zoom = {14}></map>
        </div>
      ) : (
        <div>
          <p className="lead">
            Please login to the package manager:
          </p>
          <button className="btn btn-dark btn-lg" onClick={this.login}>
            Login
          </button>
        </div>
      );

      return (
        <div className="jumbotron">
          <h1 className="display-4">Tracker</h1>
          {mainContent}
        </div>
      );
    }
  }
);
