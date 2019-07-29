import React from "react";
import "../styles/ListView.css";
import { Link } from "react-router-dom";
import { getAllUsers } from "../actions/users";

class ListView extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.setState({
      users: getAllUsers()
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>My Contacts</h1>
        </header>
        <ul>
          {this.state.users.map(user => (
            <li key={"user-" + user.id}>
              <Link to={"/user/" + user.id}>
                <img src={user.img} alt="pic" /> <span>{user.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListView;
