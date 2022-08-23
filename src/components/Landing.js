import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>WHO"S WATCHING</h1>
        <div className="boxs">
          {this.props.users.map((user, index) => (
            <Link to="/catalog" key={index}>
              <div className="box" style={{ backgroundColor: `${user.color}` }}>
                <span>{user.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Landing;
