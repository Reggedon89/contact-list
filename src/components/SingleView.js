import React from "react";
import { Link } from "react-router-dom";
import { getUser } from "../actions/users";
import "../styles/SingleView.css";

class SingleView extends React.Component {
  state = {
    img: "",
    name: "",
    email: "",
    phone: "",
    location: ""
  };
  componentDidMount() {
    const user = getUser(this.props.match.params.id);
    this.setState({
      img: user.img,
      name: user.name,
      email: user.email,
      phone: user.phone,
      location: user.location
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="profile">
          <div className="backButton">
            <Link to="/">&larr;</Link>
          </div>
          <p>
            {" "}
            <img className="photo" src={this.state.img} />
          </p>
          <p className="info">{this.state.name}</p>
          <p className="info">{this.state.email}</p>
          <p className="info">{this.state.phone}</p>
          <p className="info">{this.state.location}</p>
        </div>
      </div>
    );
  }
}

export default SingleView;
