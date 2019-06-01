import React, { Component } from "react";
import { Title } from "./styles";

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    console.log("aaa");
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("http://localhost:8000/api/mensagem");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log(body);
    return body;
  };

  render() {
    return (
      <>
        <Title>Mds {this.state.response}</Title>
      </>
    );
  }
}

export default App;
