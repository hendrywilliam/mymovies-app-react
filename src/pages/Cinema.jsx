import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

class Cinema extends Component {
  render() {
    return (
      <div>
        <p>{this.props.location.state.data}</p>
        <Navbar
          home={() => this.props.navigate("/")}
          cinema={() => this.props.navigate("/cinema")}
          series={() => this.props.navigate("/series")}
          local={() => this.props.navigate("/local")}
          kids={() => this.props.navigate("/kids")}
          donkey={() => this.props.navigate("/donkeyplus")}
        />
      </div>
    );
  }
}
export default Cinema;
